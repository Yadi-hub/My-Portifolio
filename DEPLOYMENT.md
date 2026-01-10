# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## 🚀 Quick Deploy with Vercel (Recommended)

Vercel offers the easiest deployment experience for React applications.

### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

Your site will be live in minutes with automatic deployments on every push!

## 🌐 Deploy with Netlify

### Option 1: Git Integration
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: \`npm run build\`
   - Publish directory: \`dist\`
6. Click "Deploy site"

### Option 2: Manual Deploy
1. Run \`npm run build\`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the \`dist\` folder to Netlify

## 📄 Deploy with GitHub Pages

1. Install gh-pages:
\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. Update \`package.json\`:
\`\`\`json
{
  "homepage": "https://yourusername.github.io/portfolio-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
\`\`\`

3. Update \`vite.config.js\`:
\`\`\`javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', // Replace with your repo name
})
\`\`\`

4. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

## ☁️ Deploy with Firebase Hosting

1. Install Firebase CLI:
\`\`\`bash
npm install -g firebase-tools
\`\`\`

2. Login and initialize:
\`\`\`bash
firebase login
firebase init hosting
\`\`\`

3. Configuration:
   - Public directory: \`dist\`
   - Single-page app: Yes
   - Overwrite index.html: No

4. Build and deploy:
\`\`\`bash
npm run build
firebase deploy
\`\`\`

## 🐳 Deploy with Docker

1. Create \`Dockerfile\`:
\`\`\`dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

2. Build and run:
\`\`\`bash
docker build -t portfolio .
docker run -p 80:80 portfolio
\`\`\`

## 🔧 Environment Variables

For production deployments, you might need environment variables:

1. Create \`.env.production\`:
\`\`\`
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=your.email@example.com
\`\`\`

2. Use in your components:
\`\`\`javascript
const apiUrl = import.meta.env.VITE_API_URL;
\`\`\`

## 📊 Performance Optimization

Before deploying, optimize your build:

1. **Analyze bundle size**:
\`\`\`bash
npm run build
npx vite-bundle-analyzer dist
\`\`\`

2. **Enable compression** (most hosts do this automatically)

3. **Optimize images**:
   - Use WebP format when possible
   - Compress images before adding to project
   - Consider using a CDN for images

## 🔒 Security Headers

Add security headers in your hosting platform:

### Netlify (_headers file):
\`\`\`
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
\`\`\`

### Vercel (vercel.json):
\`\`\`json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
\`\`\`

## 🌍 Custom Domain

### Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify:
1. Go to "Site settings" → "Domain management"
2. Add custom domain
3. Update DNS records

## 📈 Analytics

Add analytics to track your portfolio performance:

### Google Analytics:
1. Create GA4 property
2. Add tracking code to \`index.html\`
3. Or use a React library like \`react-ga4\`

### Vercel Analytics:
1. Install: \`npm install @vercel/analytics\`
2. Add to your app:
\`\`\`javascript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
\`\`\`

## 🔍 SEO Optimization

1. **Update meta tags** in \`index.html\`
2. **Add sitemap.xml** to public folder
3. **Create robots.txt**:
\`\`\`
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
\`\`\`

## 🚨 Troubleshooting

### Common Issues:

1. **404 on refresh**: Configure your host for SPA routing
2. **Build fails**: Check Node.js version compatibility
3. **Images not loading**: Verify image paths and formats
4. **Styles not applying**: Check Tailwind CSS configuration

### Debug Commands:
\`\`\`bash
# Check build locally
npm run build && npm run preview

# Check for errors
npm run lint

# Clear cache
rm -rf node_modules dist
npm install
\`\`\`

## 📞 Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Review build logs for errors
3. Test locally with \`npm run build && npm run preview\`
4. Check browser console for JavaScript errors

Happy deploying! 🎉