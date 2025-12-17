import { motion } from 'motion/react';
import { ArrowRight, Award, Building2, Code, Heart, Lightbulb, Target, Users, X } from 'lucide-react';
import profileImage from 'figma:asset/b89010cfe61549e32328264750042804660ce631.png';

interface HomePortalProps {
  onNavigate: (portal: 'journey') => void;
  onClose?: () => void;
}

export default function HomePortal({ onNavigate, onClose }: HomePortalProps) {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto">
      <motion.div
        className="max-w-5xl w-full bg-gradient-to-br from-blue-900/60 to-violet-900/60 backdrop-blur-xl border-2 border-violet-500/40 rounded-3xl p-8 md:p-16 shadow-[0_0_80px_rgba(126,34,206,0.4)] my-4"
        initial={{ rotateY: -15, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        {onClose && (
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-5 h-5 text-violet-400" />
            </button>
          </div>
        )}
        
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Premium 3D Avatar */}
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <div className="absolute inset-0 w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
            
            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Triple Ring Border */}
              <div className="absolute inset-0 rounded-full border-4 border-violet-500/50 shadow-[0_0_60px_rgba(126,34,206,0.5)]" />
              <div className="absolute inset-2 rounded-full border-2 border-purple-400/40" />
              
              {/* Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-900/20 to-violet-900/20">
                <img 
                  src={profileImage} 
                  alt="Vishnu Vardhan Burri - Lead Developer | Software Development Engineer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Title Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-white tracking-widest mb-3">VISHNU VARDHAN BURRI</h1>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
                <p className="text-violet-300">Software Development Engineer | AI Automation | Test Automation</p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
              </div>
              <p className="text-gray-400">Building reliable software systems, AI-driven automations, and quality-tested solutions.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-full">
                <Award className="w-4 h-4 text-violet-400" />
                <span>Ex-Microsoft</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-full">
                <Users className="w-4 h-4 text-violet-400" />
                <span>Educator & Mentor</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-full">
                <Code className="w-4 h-4 text-violet-400" />
                <span>Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-full">
                <Building2 className="w-4 h-4 text-violet-400" />
                <span>AI & Cybersecurity</span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi! I'm Vishnu, a Software Development Engineer specializing in AI automation, test automation, and full-stack development. 
              I build reliable, secure systems that solve real-world problems. As Vice President of the Coding Club, I'm passionate about 
              teaching and mentoring the next generation of developers.
            </motion.p>
          </div>

          {/* Personal Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl">
              <Heart className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white mb-1">Passionate</h3>
                <p className="text-gray-400">Driven by curiosity and love for innovation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl">
              <Lightbulb className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white mb-1">Innovative</h3>
                <p className="text-gray-400">Creating solutions for tomorrow's challenges</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl">
              <Target className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white mb-1">Purpose-Driven</h3>
                <p className="text-gray-400">Technology for social impact and growth</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-2xl transition-all shadow-[0_0_30px_rgba(126,34,206,0.4)] hover:shadow-[0_0_40px_rgba(126,34,206,0.6)]"
            onClick={() => onNavigate('journey')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore My Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}