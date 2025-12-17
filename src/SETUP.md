# 🛠️ Setup Guide

Quick setup guide to customize this portfolio for your own use.

## ⚡ Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/vishnuvardhanburri/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the portfolio.

---

## 🎨 Customization Checklist

### Personal Information

#### 📝 **Update Your Details**

**File: `/App.tsx`** (Lines 22-45)
```typescript
// Update SEO meta tags
document.title = 'Your Name | Your Title';
// Update meta descriptions with your information
```

**File: `/components/portals/HomePortal.tsx`**
- [ ] Line 59: Update alt text with your name
- [ ] Line 74: Change name to yours
- [ ] Line 77: Update your title/tagline
- [ ] Line 80: Update your description
- [ ] Lines 89-104: Update badges (Ex-Company, Skills, etc.)
- [ ] Lines 113-116: Rewrite your introduction paragraph

**File: `/components/portals/ContactPortal.tsx`**
- [ ] Update email address
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Update Twitter/X URL (if applicable)
- [ ] Update phone number (if you want to include it)
- [ ] Update location

---

### 📷 **Replace Profile Images**

The portfolio uses two profile images:

1. **Central Avatar Hub** (`/components/AvatarHub.tsx`)
   ```typescript
   // Line 1: Replace with your image
   import profileImage from 'figma:asset/YOUR_IMAGE_HASH.png';
   ```

2. **About Me Portal** (`/components/portals/HomePortal.tsx`)
   ```typescript
   // Line 3: Replace with your image
   import profileImage from 'figma:asset/YOUR_IMAGE_HASH.png';
   ```

**How to add your images:**
- Place your images in an accessible location
- Update the import paths
- Recommended: Use square images (1:1 ratio)
- Optimal size: 500x500px or larger

---

### 💼 **Update Content**

#### **Journey Portal** (`/components/portals/JourneyPortal.tsx`)
- [ ] Education: University, degree, years, achievements
- [ ] Timeline milestones
- [ ] Learning journey narrative

#### **Experience Portal** (`/components/portals/ExperiencePortal.tsx`)
- [ ] Company names
- [ ] Job titles
- [ ] Dates (start/end)
- [ ] Responsibilities and achievements
- [ ] Technologies used

#### **Projects Portal** (`/components/portals/ProjectsPortal.tsx`)
- [ ] Project names
- [ ] Descriptions
- [ ] Technologies used
- [ ] GitHub links
- [ ] Live demo links
- [ ] Screenshots (if applicable)

#### **Skills Portal** (`/components/portals/SkillsPortal.tsx`)
- [ ] Programming languages
- [ ] Frameworks and libraries
- [ ] Tools and platforms
- [ ] Soft skills
- [ ] Certifications

#### **Certifications Portal** (`/components/portals/CertificationsPortal.tsx`)
- [ ] Certification names
- [ ] Issuing organizations
- [ ] Dates
- [ ] Credential IDs/links

---

### 🎨 **Customize Colors** (Optional)

**File: `/styles/globals.css`**

Current color scheme:
- Background: `#000000` (Black)
- Primary: `#1E3A8A` (Deep Blue)
- Accent: `#7E22CE` (Violet)

To change colors, search and replace throughout the project:
```bash
# Find all instances of a color
grep -r "#7E22CE" .

# Replace with your color
# (Use your editor's find/replace feature)
```

**Common color locations:**
- Gradient backgrounds
- Border colors
- Text colors
- Shadow colors
- Glow effects

---

### 🔗 **Update Links**

#### **Footer** (`/App.tsx`)
- [ ] Line 219: Update email address

#### **README.md**
- [ ] GitHub repository URL
- [ ] Live website URL
- [ ] Social media links
- [ ] Contact email

#### **package.json**
- [ ] Line 4: Update author name
- [ ] Line 5: Update email
- [ ] Line 6: Update website URL
- [ ] Line 16: Update repository URL
- [ ] Line 19: Update issues URL
- [ ] Line 21: Update homepage URL

---

## 🚀 Testing Your Changes

### 1. Development Mode
```bash
npm run dev
```
- Test all portals
- Check responsiveness (resize browser)
- Test on mobile device
- Verify all links work

### 2. Production Build
```bash
npm run build
npm run preview
```
- Check for build errors
- Verify production performance
- Test on different browsers

### 3. Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### 4. Lighthouse Audit
- Open Chrome DevTools
- Go to Lighthouse tab
- Run audit
- Aim for 90+ scores

---

## 📦 Before Deploying

### Final Checklist

- [ ] All personal information updated
- [ ] Profile images replaced
- [ ] All content reviewed and proofread
- [ ] All links tested and working
- [ ] Contact information correct
- [ ] Social media links updated
- [ ] SEO meta tags customized
- [ ] Favicon added (if desired)
- [ ] No console errors
- [ ] Mobile responsive tested
- [ ] Cross-browser tested
- [ ] Build completes successfully

### SEO Optimization

**Update these meta tags in `/App.tsx`:**
- [ ] Page title
- [ ] Meta description
- [ ] Meta keywords
- [ ] Open Graph title
- [ ] Open Graph description
- [ ] Twitter card title
- [ ] Twitter card description

---

## 🐛 Common Issues

### Images Not Showing
- Verify image import paths are correct
- Check if images are in the right format
- Ensure images are not too large (compress if needed)

### Animations Not Smooth
- Check browser performance
- Reduce number of animated elements
- Test on different devices

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
- Clear browser cache
- Check Tailwind class names
- Verify CSS is being loaded

---

## 💡 Tips

### Performance
- Optimize images before adding them
- Keep animations smooth but minimal
- Test on slower devices

### Content
- Keep descriptions concise
- Use action verbs
- Quantify achievements
- Proofread everything

### Design
- Maintain consistent spacing
- Keep color scheme cohesive
- Ensure good contrast for readability

---

## 📚 Resources

### Learning
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Tools
- [Unsplash](https://unsplash.com) - Free images
- [TinyPNG](https://tinypng.com) - Image compression
- [Coolors](https://coolors.co) - Color palettes
- [Google Fonts](https://fonts.google.com) - Typography

### Deployment
- See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guides

---

## ❓ Need Help?

- Check existing [GitHub Issues](https://github.com/vishnuvardhanburri/portfolio/issues)
- Create a new issue with detailed description
- Email: vishnuvardhanburri19@gmail.com

---

**You're all set! Happy customizing!** 🎉
