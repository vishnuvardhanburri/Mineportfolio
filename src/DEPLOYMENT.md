# 🚀 Deployment Guide

This guide covers multiple deployment options for the portfolio website.

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Custom Server](#custom-server)
- [Environment Variables](#environment-variables)

---

## Vercel (Recommended)

Vercel offers the easiest deployment with zero configuration.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** 🎉
   - Your site will be live at `your-project.vercel.app`
   - Automatic deployments on every push
   - Custom domain support available

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `vishnuvardhanburri.com`)
3. Configure DNS records as instructed
4. Wait for SSL certificate (automatic)

---

## Netlify

Another excellent option with similar ease of use.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Netlify"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist` (or `build` depending on your setup)
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add custom domain
   - Configure DNS records

---

## GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / root
   - Save

5. **Access your site**
   - Visit `https://yourusername.github.io/portfolio`

### Custom Domain with GitHub Pages

1. Add `CNAME` file to `/public/CNAME`:
   ```
   vishnuvardhanburri.com
   ```

2. Configure DNS:
   - Type: `A` Record
   - Name: `@`
   - Value: GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. For `www` subdomain:
   - Type: `CNAME`
   - Name: `www`
   - Value: `yourusername.github.io`

---

## Custom Server

Deploy to your own server (VPS, AWS, DigitalOcean, etc.)

### Prerequisites
- Node.js 16+ installed
- Web server (Nginx/Apache)
- Domain pointing to server

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload build files**
   ```bash
   # Using SCP
   scp -r dist/* user@your-server:/var/www/portfolio/

   # Using RSYNC
   rsync -avz dist/ user@your-server:/var/www/portfolio/
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name vishnuvardhanburri.com www.vishnuvardhanburri.com;
       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
   }
   ```

4. **Enable SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d vishnuvardhanburri.com -d www.vishnuvardhanburri.com
   ```

5. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

## Environment Variables

If you add environment variables in the future:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables (e.g., `VITE_API_KEY`)
3. Redeploy

### Netlify
1. Site settings → Build & deploy → Environment
2. Add variables
3. Trigger redeploy

### Local Development
Create `.env.local`:
```env
VITE_API_KEY=your_api_key_here
VITE_CONTACT_EMAIL=vishnuvardhanburri19@gmail.com
```

---

## Performance Optimization

### Before Deployment

1. **Optimize images**
   - Compress images using tools like [TinyPNG](https://tinypng.com)
   - Use WebP format when possible

2. **Check bundle size**
   ```bash
   npm run build
   # Check dist folder size
   ```

3. **Test production build locally**
   ```bash
   npm run build
   npm run preview
   ```

### After Deployment

1. **Test performance**
   - [PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)
   - [WebPageTest](https://webpagetest.org)

2. **Set up monitoring**
   - Vercel Analytics (built-in)
   - Google Analytics
   - Cloudflare Analytics

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA issue)
Most platforms handle this automatically, but if not:

**Vercel**: Create `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify**: Create `_redirects` in `/public`
```
/*    /index.html   200
```

### Assets Not Loading
- Check if paths are correct (use relative paths)
- Verify build output in `dist` folder
- Check browser console for errors

---

## Continuous Deployment

Both Vercel and Netlify offer automatic deployments:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Automatic build and deploy** 🚀
   - Triggered on every push
   - Preview deployments for PRs
   - Instant rollback available

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages/portals work
- [ ] Animations are smooth
- [ ] Images load properly
- [ ] Mobile responsive works
- [ ] SEO meta tags present
- [ ] Contact links work
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Analytics tracking setup

---

## Support

If you encounter issues:
- Check platform documentation (Vercel/Netlify/etc.)
- Review build logs for errors
- Test locally first with `npm run build && npm run preview`
- Contact: vishnuvardhanburri19@gmail.com

---

**Happy Deploying!** 🌐✨
