import { motion } from 'motion/react';
import { X, Code, Palette, Database, Brain, Wrench } from 'lucide-react';

interface SkillsPortalProps {
  onClose: () => void;
}

export default function SkillsPortal({ onClose }: SkillsPortalProps) {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'R', 'SQL'],
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'Neural Networks', 'NLP', 'Computer Vision'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Postman', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <motion.div
          className="bg-gradient-to-br from-blue-900/40 to-violet-900/40 backdrop-blur-md border border-violet-500/30 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(126,34,206,0.3)]"
          initial={{ rotateY: -15, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white">Skills & Expertise</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-6 h-6 text-violet-400" />
            </button>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
                    <category.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-violet-400">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="group px-4 py-2 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-lg text-gray-300 hover:bg-violet-500/20 hover:border-violet-500/40 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(126, 34, 206, 0.2)',
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-8 p-6 bg-violet-500/10 border border-violet-500/30 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-violet-400 mb-2">Continuous Learning</h4>
            <p className="text-gray-300">
              Constantly updating skills through certifications, hands-on projects, and staying current with emerging technologies in AI, cybersecurity, and full-stack development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
