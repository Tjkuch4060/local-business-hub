#!/usr/bin/env bash
set -euo pipefail
# Optimize images from assets/ into optimized/ using @squoosh/cli
# Supports png, jpg, jpeg

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_DIR"

mkdir -p optimized
shopt -s nullglob nocaseglob
files=(assets/*.{png,jpg,jpeg})

if (( ${#files[@]} == 0 )); then
  echo "No images found in assets/"
  exit 0
fi

# Run Squoosh:
# - PNG: lossless via oxipng
# - JPEG: mozjpeg quality 80
# - Also produce WebP and AVIF alternates
npx @squoosh/cli \
  --oxipng '{}' \
  --mozjpeg '{quality:80}' \
  --webp '{quality:80}' \
  --avif '{cqLevel:33}' \
  "${files[@]}" -d optimized

echo "Optimized ${#files[@]} image(s) into ./optimized (png/jpg/jpeg + webp + avif)"
