import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function TechGrid() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Further reduced dots for optimal performance
  const dotCount = isMobile ? 5 : 10;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(126, 34, 206, 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Optimized animated dots */}
        {[...Array(dotCount)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r="2"
            fill="#7E22CE"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}