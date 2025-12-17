import { motion } from 'motion/react';
import { X, Heart, Users, Sparkles, Globe, Rocket, Shield } from 'lucide-react';
import xaviraLogo from 'figma:asset/7295f5fffee3f09fa26c14cf82acf2667eb0739c.png';
import hackathonCert from 'figma:asset/c4a2ce4f6bc4a10bf4d5bf778ccd61007ff51536.png';

interface JourneyPortalProps {
  onClose: () => void;
}

export default function JourneyPortal({ onClose }: JourneyPortalProps) {
  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇬🇧' },
    { name: 'Telugu', level: 'Native', flag: '🇮🇳' },
    { name: 'Tamil', level: 'Conversational', flag: '🇮🇳' },
    { name: 'Hindi', level: 'Conversational', flag: '🇮🇳' },
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <motion.div
          className="bg-gradient-to-br from-blue-900/60 to-violet-900/60 backdrop-blur-xl border-2 border-violet-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_80px_rgba(126,34,206,0.4)]"
          initial={{ rotateY: -15, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white">My Journey</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-6 h-6 text-violet-400" />
            </button>
          </div>

          {/* Introduction */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-violet-300 mb-4">From Curiosity to Engineering 💡</h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              My path as a Software Development Engineer has been driven by curiosity, continuous learning, and a passion 
              for building systems that solve real-world problems. Here's the story of how I got here.
            </p>
          </motion.div>

          {/* Core Focus Areas */}
          <div className="mb-12">
            <h3 className="text-violet-400 mb-6 text-center">What I Focus On</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-violet-400" />
                </div>
                <h4 className="text-white mb-2">AI & Cybersecurity</h4>
                <p className="text-gray-300">
                  Building intelligent security systems and AI-driven solutions that protect data and automate complex workflows.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-violet-400" />
                </div>
                <h4 className="text-white mb-2">Test Automation</h4>
                <p className="text-gray-300">
                  Creating robust automated testing frameworks that ensure software quality and reliability at scale.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-violet-400" />
                </div>
                <h4 className="text-white mb-2">Full-Stack Development</h4>
                <p className="text-gray-300">
                  Developing end-to-end web applications with modern frameworks and best practices.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Personal Philosophy */}
          <motion.div
            className="mb-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-violet-500/30 rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-violet-400" />
              <h3 className="text-violet-300">Why I Code</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              My journey started with curiosity—tinkering with code, breaking things, and learning from failures. From my days as an 
              <span className="text-violet-400"> NSS Coordinator</span> organizing community drives to being 
              <span className="text-violet-400"> Vice President of the Coding Club</span> where I teach and mentor juniors, 
              to interning at <span className="text-violet-400"> Microsoft</span> and <span className="text-violet-400">IIIT Allahabad</span>, 
              every experience taught me one thing: <span className="text-white">technology should serve people</span>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether it's securing patient data, building AI models for predictive healthcare, teaching programming to juniors, 
              or mentoring young developers, I believe in creating technology that makes a real difference. ✨
            </p>
          </motion.div>

          {/* My Journey Timeline */}
          <div className="mb-12">
            <h3 className="text-violet-400 mb-6">My Journey So Far 🌟</h3>
            <div className="space-y-6">
              {[
                { year: '2021-2023', title: 'The Foundation', desc: 'Intermediate MPC at Narayana Junior College - where my love for problem-solving grew', icon: '📚' },
                { year: '2023', title: 'The Beginning', desc: 'Started B.Tech CSE (Cybersecurity) at The Apollo University with a dream to make tech safer', icon: '🎓' },
                { year: '2023-Present', title: 'Giving Back', desc: 'NSS Coordinator - organizing cleaning drives, medical awareness, tree plantations. Service before self! 🌱', icon: '🤝' },
                { year: '2023-Present', title: 'Teaching & Leadership', desc: 'Vice President of Coding Club - teaching and mentoring juniors in programming, sharing knowledge, and inspiring the next generation of developers! 👨‍🏫', icon: '💻' },
                { year: '2024', title: 'Security Research', desc: 'Ethical Hacking Intern at IIIT Allahabad - learned to think like attackers to protect better', icon: '🔒' },
                { year: '2023', title: 'Innovation Challenge', desc: 'Qualified for finals at Sandharnya Vikas Hackathon 1.0 at Chandigarh University - proved ideas matter!', icon: '🏆' },
                { year: '2025', title: 'AI Development', desc: 'AI Developer Intern at Microsoft - worked on predictive healthcare analytics that save lives', icon: '💼' },
                { year: '2025', title: 'Full-Stack Mastery', desc: 'Full-Stack Developer at Ripan Technologies - mastered the art of building beautiful, functional applications', icon: '⚡' },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-violet-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500 border-2 border-black" />
                  <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-5 hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{milestone.icon}</span>
                        <div>
                          <h4 className="text-white">{milestone.title}</h4>
                          <span className="text-violet-400">{milestone.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hackathon Achievement */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-violet-400 mb-4">Achievement Unlocked 🎯</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 overflow-hidden">
              <img 
                src={hackathonCert} 
                alt="Sandharnya Vikas Hackathon Certificate" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Languages I Speak */}
          <div className="mb-8">
            <h3 className="text-violet-400 mb-4">Languages I Speak 🌍</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-violet-500/40 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="text-white mb-1">{lang.name}</div>
                  <div className="text-violet-400">{lang.level}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <motion.div
            className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/40 rounded-2xl p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Sparkles className="w-12 h-12 text-violet-400 mx-auto mb-4" />
            <h3 className="text-white mb-3">Let's Connect! 🌟</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always eager to learn, collaborate, and build meaningful solutions. Whether you're working on an exciting project, 
              exploring new technologies, or just want to chat about engineering, feel free to reach out!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}