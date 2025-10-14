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

# Run Squoosh: lossless PNG via oxipng, JPEG via mozjpeg quality 80
npx @squoosh/cli --oxipng '{}' --mozjpeg '{quality:80}' "${files[@]}" -d optimized

echo "Optimized ${#files[@]} image(s) into ./optimized"
