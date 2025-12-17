import { motion } from 'motion/react';

interface PortalProps {
  title: string;
  position: { x: number; y: number };
  onClick: () => void;
  index: number;
}

export default function Portal({ title, position, onClick, index }: PortalProps) {
  return (
    <motion.button
      className="absolute group"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotateZ: 0,
        y: [0, -8, 0],
      }}
      transition={{ 
        opacity: { duration: 0.5, delay: 0.15 + index * 0.06 },
        scale: { duration: 0.5, delay: 0.15 + index * 0.06, type: 'spring', stiffness: 160, damping: 15 },
        rotateZ: { duration: 0.5, delay: 0.15 + index * 0.06, type: 'spring', stiffness: 160, damping: 15 },
        y: { duration: 3, delay: index * 0.2, repeat: Infinity, ease: 'easeInOut' }
      }}
      whileHover={{ 
        scale: 1.15,
        y: -10,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="relative">
        {/* Perfect Circle Portal Card */}
        <motion.div
          className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-900/70 to-violet-900/70 backdrop-blur-xl border-2 border-violet-500/50 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(126,34,206,0.4)] p-3 md:p-4"
          whileHover={{
            borderColor: 'rgba(126, 34, 206, 0.9)',
            boxShadow: '0 16px 48px rgba(126, 34, 206, 0.6)',
            background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.8), rgba(88, 28, 135, 0.8))',
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Icon with enhanced styling */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-violet-500/50 to-purple-500/50 border-2 border-violet-400/60 mb-1.5 md:mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-violet-400/80" />
          </div>
          
          <span className="text-white text-center tracking-wide text-[10px] md:text-xs leading-tight px-1">{title}</span>
        </motion.div>

        {/* Enhanced Glow Effect - Circular */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 to-purple-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        />
      </div>
    </motion.button>
  );
}