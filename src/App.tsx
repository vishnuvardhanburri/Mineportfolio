import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import AvatarHub from './components/AvatarHub';
import Portal from './components/Portal';
import TechGrid from './components/TechGrid';
import AIAssistant from './components/AIAssistant';
import HomePortal from './components/portals/HomePortal';
import JourneyPortal from './components/portals/JourneyPortal';
import ExperiencePortal from './components/portals/ExperiencePortal';
import ProjectsPortal from './components/portals/ProjectsPortal';
import SkillsPortal from './components/portals/SkillsPortal';
import CertificationsPortal from './components/portals/CertificationsPortal';
import ContactPortal from './components/portals/ContactPortal';

type PortalType = 'home' | 'journey' | 'experience' | 'projects' | 'skills' | 'certifications' | 'contact' | null;

export default function App() {
  const [activePortal, setActivePortal] = useState<PortalType>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Vishnu Vardhan Burri | Lead Developer | Software Development Engineer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lead Developer & Software Development Engineer specializing in AI Automation and Test Automation | Ex-Microsoft AI Intern | Full-Stack Developer');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Vishnu Vardhan Burri, Lead Developer, Software Development Engineer, AI Automation, Test Automation, Full-Stack Developer, Microsoft Intern, vishnuvardhanburri.com');
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Vishnu Vardhan Burri | Lead Developer | Software Development Engineer');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Lead Developer & Software Development Engineer specializing in AI Automation and Test Automation | Ex-Microsoft AI Intern | Full-Stack Developer');
    }
  }, []);

  // Calculate circular positions for portals around the avatar
  // Use smaller radius on mobile for better fit
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Perfect circle radius for optimal layout
  const radius = isMobile ? 180 : 320;
  const angleStep = 360 / 7; // 7 portals evenly distributed in perfect circle
  
  const portals = [
    { id: 'home' as PortalType, title: 'About Me' },
    { id: 'journey' as PortalType, title: 'My Journey' },
    { id: 'experience' as PortalType, title: 'Experience' },
    { id: 'projects' as PortalType, title: 'Projects' },
    { id: 'skills' as PortalType, title: 'Skills' },
    { id: 'certifications' as PortalType, title: 'Certifications' },
    { id: 'contact' as PortalType, title: 'Contact' },
  ].map((portal, index) => {
    // Start from top and distribute evenly in a circle
    // -90 degrees = top position
    const startAngle = -90;
    const angle = (startAngle + index * angleStep) * (Math.PI / 180);
    return {
      ...portal,
      position: {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      }
    };
  });

  const renderPortalContent = () => {
    switch (activePortal) {
      case 'home':
        return <HomePortal onNavigate={(portal) => setActivePortal(portal)} onClose={() => setActivePortal(null)} />;
      case 'journey':
        return <JourneyPortal onClose={() => setActivePortal(null)} />;
      case 'experience':
        return <ExperiencePortal onClose={() => setActivePortal(null)} />;
      case 'projects':
        return <ProjectsPortal onClose={() => setActivePortal(null)} />;
      case 'skills':
        return <SkillsPortal onClose={() => setActivePortal(null)} />;
      case 'certifications':
        return <CertificationsPortal onClose={() => setActivePortal(null)} />;
      case 'contact':
        return <ContactPortal onClose={() => setActivePortal(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        {/* SEO Meta Tags */}
        <meta name="description" content="Software Development Engineer specializing in AI Automation and Test Automation | Ex-Microsoft AI Intern | Full-Stack Developer" />
        <meta name="keywords" content="Vishnu Vardhan Burri, Software Development Engineer, AI Automation, Test Automation, Full-Stack Developer, Microsoft Intern, vishnuvardhanburri.com" />
        <meta property="og:title" content="Vishnu Vardhan Burri | Software Development Engineer" />
        <meta property="og:description" content="Software Development Engineer specializing in AI Automation and Test Automation | Ex-Microsoft AI Intern | Full-Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishnuvardhanburri.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishnu Vardhan Burri | Software Development Engineer" />
        <meta name="twitter:description" content="Software Development Engineer specializing in AI Automation and Test Automation | Ex-Microsoft AI Intern | Full-Stack Developer" />
        <link rel="canonical" href="https://vishnuvardhanburri.com" />
        
        {/* Animated Tech Grid Background */}
        <TechGrid />

        {/* Premium Top Bar */}
        <motion.header 
          className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <h1 className="text-white tracking-[0.2em] text-sm md:text-base">VISHNU VARDHAN BURRI</h1>
            <span className="hidden md:inline text-violet-400">•</span>
            <div className="flex items-center gap-2">
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              <p className="text-violet-300 text-xs md:text-sm">Lead Developer | Software Development Engineer</p>
            </div>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 md:p-2.5 rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-md border border-violet-500/30 hover:border-violet-500/60 transition-all shadow-lg hover:shadow-violet-500/20"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5 text-violet-400" /> : <Moon className="w-4 h-4 md:w-5 md:h-5 text-violet-400" />}
          </button>
        </motion.header>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {activePortal ? (
            <motion.div
              key="portal-content"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 z-30 flex items-center justify-center p-4 md:p-8"
            >
              {renderPortalContent()}
            </motion.div>
          ) : (
            <motion.div
              key="hub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              {/* Central Avatar Hub */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Perfect Circular Orbit Ring */}
                <motion.div
                  className="absolute w-[380px] h-[380px] md:w-[660px] md:h-[660px] rounded-full border border-violet-500/10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.div
                  className="absolute w-[380px] h-[380px] md:w-[660px] md:h-[660px] rounded-full"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(126, 34, 206, 0.1) 50%, transparent 100%)',
                  }}
                />
                
                {/* Avatar at Center */}
                <AvatarHub />

                {/* Portals */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {portals.map((portal, index) => (
                    <Portal
                      key={portal.id}
                      title={portal.title}
                      position={portal.position}
                      onClick={() => setActivePortal(portal.id)}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium Footer Ring */}
        <motion.footer 
          className="absolute bottom-0 left-0 right-0 z-40 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-500 text-xs md:text-sm">© 2025 Vishnu Vardhan Burri</p>
          <span className="hidden md:inline text-violet-500">•</span>
          <a 
            href="mailto:vishnuvardhanburri19@gmail.com" 
            className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-2 text-xs md:text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            vishnuvardhanburri19@gmail.com
          </a>
        </motion.footer>

        {/* AI Assistant */}
        <AIAssistant />
      </div>
    </div>
  );
}