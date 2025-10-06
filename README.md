# Local Business Hub 🏪

> Everything your local business needs in one simple platform

A comprehensive, all-in-one platform designed specifically for local service businesses. This SaaS demo includes a professional website builder, online booking system, customer relationship management (CRM), and review management tools - all integrated into a single, user-friendly interface.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/local-business-hub)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/local-business-hub)

## ✨ Features

### 🌐 Website Builder
- Industry-specific templates (Plumber, Salon, Landscaper, Bakery, etc.)
- Real-time preview and customization
- Mobile-responsive design
- Color customization
- One-click publishing

### 📅 Booking System
- Calendar view with availability management
- Service management with pricing and duration
- Booking status tracking (Confirmed, Pending)
- Customer appointment history
- Easy service addition and editing

### 👥 Customer Management (CRM)
- Complete customer database
- Lead tracking and management
- Customer activity history
- Follow-up reminders
- Search and filter capabilities
- Customer analytics and retention metrics

### ⭐ Review Management
- Automated review requests
- Multi-platform review collection (Google, Yelp)
- Review response templates
- SMS reminder integration
- Review display and management

### 💰 Transparent Pricing
- Three-tier pricing structure (Basic, Pro, Premium)
- 14-day free trial
- Clear feature comparison
- FAQ section

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 16+ (optional, for development)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/local-business-hub.git
   cd local-business-hub
   ```

2. **Install dependencies (optional)**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   # Option 1: Using npm
   npm run dev

   # Option 2: Using Python
   python -m http.server 3000

   # Option 3: Using PHP
   php -S localhost:3000

   # Option 4: Open directly
   # Simply open index.html in your browser
   ```

4. **Visit the application**
   ```
   http://localhost:3000
   ```

## 📦 Production Build

### Optimize Assets

```bash
# Run all optimizations
npm run build

# Individual optimizations
npm run minify:css      # Minify CSS
npm run minify:js       # Minify JavaScript
npm run optimize:images # Optimize images
```

### Performance Testing

```bash
# Run Lighthouse audit
npm run lighthouse
```

## 🌍 Deployment

### Deploy to Netlify

#### Option 1: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Option 2: Using Git Integration
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"

#### Option 3: Drag & Drop
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Done! Your site is live

**Configuration**: The `netlify.toml` file is already configured with:
- Security headers
- SPA routing
- Cache optimization

### Deploy to Vercel

#### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option 2: Using Git Integration
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Configuration**: The `vercel.json` file includes:
- Security headers
- Routing rules
- Cache policies

### Deploy to GitHub Pages

#### Option 1: Using GitHub Actions (Recommended)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically deploy on push to main

#### Option 2: Using npm script
```bash
npm run deploy:gh-pages
```

#### Option 3: Manual Deployment
```bash
# Build the site
npm run build

# Push to gh-pages branch
git subtree push --prefix . origin gh-pages
```

### Deploy to Other Platforms

#### Cloudflare Pages
1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your Git repository
3. Configure build settings:
   - Build command: `echo "Static site"`
   - Build output: `.`
4. Deploy

#### AWS S3 + CloudFront
```bash
# Upload to S3
aws s3 sync . s3://your-bucket-name --exclude ".*" --exclude "node_modules/*"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## 🔒 Security

This project includes production-ready security headers:

- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-XSS-Protection**: Enables XSS filtering
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features
- **Content-Security-Policy**: Prevents XSS and injection attacks

## 🎨 Customization

### Update Branding
1. Edit `index.html` - Update business name and content
2. Modify `style.css` - Adjust colors using CSS variables
3. Replace `market_growth_chart.png` with your own graphics

### CSS Variables
Key design tokens in `style.css`:
```css
:root {
  --color-primary: #21808d;
  --color-background: #fcfcf9;
  --color-text: #13343b;
  /* ... and more */
}
```

### Add New Features
1. Create new sections in `index.html`
2. Add navigation links in the navbar
3. Implement functionality in `app.js`
4. Style components in `style.css`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🧪 Testing

```bash
# Run local server
npm run serve

# Open in browser
open http://localhost:3000

# Test with Lighthouse
npm run lighthouse
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility, Best Practices)
- **Load Time**: < 2 seconds
- **Bundle Size**: < 100KB (minified)

## 🔧 Environment Variables

Create a `.env` file for environment-specific configuration:

```env
# Example
API_BASE_URL=https://api.yourdomain.com
ANALYTICS_ID=UA-XXXXXXXXX-X
```

## 📖 Project Structure

```
local-business-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── index.html              # Main HTML file
├── style.css               # Styles (design system)
├── app.js                  # JavaScript functionality
├── package.json            # Project metadata & scripts
├── netlify.toml           # Netlify configuration
├── vercel.json            # Vercel configuration
├── robots.txt             # SEO crawler instructions
├── sitemap.xml            # SEO sitemap
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design system inspired by modern SaaS best practices
- Icons from Font Awesome
- Fonts from Perplexity R2 CDN

## 📞 Support

For support, email support@yourdomain.com or create an issue in the GitHub repository.

## 🗺️ Roadmap

- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment processing
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] AI-powered review responses

## 📈 Analytics

To add Google Analytics:
1. Get your GA tracking ID
2. Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

**Made with ❤️ for local businesses**
