# 🚀 Vishnu Vardhan Burri - Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-Latest-FF0080?style=for-the-badge)

A breathtaking, futuristic, non-scrolling personal portfolio website showcasing my work as a Lead Developer and Software Development Engineer. Built with cutting-edge technologies and featuring stunning 3D animations, glassmorphism design, and an interactive hub navigation system.

## ✨ Features

### 🎨 Design & UX
- **Glassmorphism Aesthetic** - Modern, clean design with frosted glass effects
- **3D Interactive Hub** - Central avatar hub with 7 orbiting portal navigation
- **Smooth Animations** - Ultra-smooth 3D rotate/scale/fade transitions using Motion (Framer Motion)
- **Non-Scrolling Design** - Full-screen immersive experience
- **Dark Theme** - Pure black background (#000000) with deep blue (#1E3A8A) and violet (#7E22CE) accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### 🧭 Navigation Portals
1. **About Me** - Introduction, skills overview, and personal values
2. **My Journey** - Educational background and career timeline
3. **Experience** - Work experience including Microsoft AI internship
4. **Projects** - Showcase of technical projects and achievements
5. **Skills** - Technical expertise in AI, automation, and development
6. **Certifications** - Professional certifications and credentials
7. **Contact** - Get in touch via email and social links

### 🛠️ Technical Features
- **AI Assistant** - Interactive chatbot for visitor engagement
- **Animated Tech Grid** - Dynamic background with floating tech elements
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- **Accessibility** - ARIA labels and semantic HTML throughout
- **Performance** - Optimized animations and lazy loading

## 🏗️ Tech Stack

### Frontend
- **React 18+** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Motion (Framer Motion)** - Advanced animation library
- **Lucide React** - Beautiful icon system

### Build & Development
- **Figma Make** - Built using Figma's web application builder
- **ES Modules** - Modern JavaScript modules
- **CSS Custom Properties** - Dynamic theming system

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vishnuvardhanburri/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:3000` (or the port specified by your dev server)

### Building for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist` or `build` folder.

## 📁 Project Structure

```
portfolio/
├── App.tsx                          # Main application component
├── components/
│   ├── AvatarHub.tsx               # Central avatar with title badge
│   ├── Portal.tsx                  # Reusable portal component
│   ├── TechGrid.tsx                # Animated background grid
│   ├── AIAssistant.tsx             # Interactive AI chatbot
│   ├── portals/
│   │   ├── HomePortal.tsx          # About Me section
│   │   ├── JourneyPortal.tsx       # Education & Timeline
│   │   ├── ExperiencePortal.tsx    # Work Experience
│   │   ├── ProjectsPortal.tsx      # Projects showcase
│   │   ├── SkillsPortal.tsx        # Technical skills
│   │   ├── CertificationsPortal.tsx # Certifications
│   │   └── ContactPortal.tsx       # Contact information
│   ├── ui/                         # Reusable UI components
│   └── figma/                      # Figma-specific components
├── styles/
│   └── globals.css                 # Global styles & Tailwind config
├── README.md                       # You are here
└── package.json                    # Project dependencies
```

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `/App.tsx` - SEO meta tags and site title
- `/components/portals/HomePortal.tsx` - About section
- `/components/portals/ExperiencePortal.tsx` - Work experience
- `/components/portals/ProjectsPortal.tsx` - Your projects
- `/components/portals/ContactPortal.tsx` - Contact details

### Color Scheme
The color scheme is defined in `/styles/globals.css`:
- **Background**: `#000000` (Pure Black)
- **Primary**: `#1E3A8A` (Deep Dark Blue)
- **Accent**: `#7E22CE` (Vibrant Violet)
- **Secondary**: Purple/Blue gradients

### Profile Images
Replace the profile images:
- Avatar images are imported using `figma:asset/[hash].png` scheme
- Update imports in `AvatarHub.tsx` and `HomePortal.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Push your code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist` or `build`

### GitHub Pages
```bash
npm run build
npm run deploy
```

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## 🤝 Contributing

While this is a personal portfolio, suggestions and bug reports are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About Me

**Vishnu Vardhan Burri**  
Lead Developer | Software Development Engineer

- 🔭 Specializing in AI Automation, Test Automation, and Full-Stack Development
- 🎓 Ex-Microsoft AI Intern
- 💼 Vice President @ Coding Club
- 🌱 Building reliable, secure systems that solve real-world problems
- 📧 Email: vishnuvardhanburri19@gmail.com
- 🌐 Website: [vishnuvardhanburri.com](https://vishnuvardhanburri.com)

## 🙏 Acknowledgments

- [Motion (Framer Motion)](https://motion.dev/) for incredible animation capabilities
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for beautiful, consistent icons
- [Figma Make](https://figma.com) for powering the development environment

## 📞 Contact & Social

- **Email**: vishnuvardhanburri19@gmail.com
- **LinkedIn**: [Connect with me](https://linkedin.com/in/vishnuvardhanburri)
- **GitHub**: [Follow my work](https://github.com/vishnuvardhanburri)
- **Portfolio**: [vishnuvardhanburri.com](https://vishnuvardhanburri.com)

---

⭐ **If you find this portfolio inspiring, please give it a star!** ⭐

*Built with ❤️ using React, Tailwind CSS, and Motion*
