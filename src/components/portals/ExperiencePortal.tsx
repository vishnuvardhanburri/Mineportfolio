import { motion } from 'motion/react';
import { X, Briefcase } from 'lucide-react';

interface ExperiencePortalProps {
  onClose: () => void;
}

export default function ExperiencePortal({ onClose }: ExperiencePortalProps) {
  const experiences = [
    {
      title: 'Founder & CEO',
      period: '2025 - Present',
      company: 'Xavira Group: Tech Labs',
      responsibilities: [
        'Founded and leading innovative tech startup focused on AI, Cybersecurity, and Healthcare solutions',
        'Building intelligent security systems and digital healthcare platforms for underserved communities',
        'Empowering startups through innovation labs with tools, mentorship, and technology',
        'Creating technology solutions that democratize access and create social impact',
      ],
    },
    {
      title: 'Vice President of Coding Club',
      period: '2023 - Present',
      company: 'The Apollo University',
      responsibilities: [
        'Teaching and mentoring junior students in programming and software development',
        'Conducting workshops on web development, algorithms, and problem-solving',
        'Organizing coding competitions and hackathons to foster innovation',
        'Building a supportive community of developers and tech enthusiasts',
      ],
    },
    {
      title: 'Microsoft AI Developer Intern',
      period: 'January 2025 - March 2025',
      company: 'Microsoft',
      responsibilities: [
        'Developed predictive analytics models for healthcare applications',
        'Implemented patient data security protocols using advanced encryption',
        'Collaborated on AI-driven healthcare solutions for improved diagnostics',
        'Optimized machine learning pipelines for real-time data processing',
      ],
    },
    {
      title: 'IIIT Allahabad Ethical Hacking Intern',
      period: 'October 2024 - March 2025',
      company: 'IIIT Allahabad',
      responsibilities: [
        'Conducted penetration testing using Metasploit and industry-standard tools',
        'Analyzed network traffic with Wireshark for vulnerability assessment',
        'Ensured HIPAA compliance for healthcare data systems',
        'Documented security findings and provided mitigation strategies',
      ],
    },
    {
      title: 'Ripan Technologies Full-Stack Developer',
      period: 'March 2025 - July 2025',
      company: 'Ripan Technologies',
      responsibilities: [
        'Built responsive web applications using React.js and Node.js',
        'Designed intuitive UI/UX interfaces for enhanced user experience',
        'Implemented Agile methodology for efficient project delivery',
        'Integrated RESTful APIs and managed database operations',
      ],
    },
    {
      title: 'NSS Coordinator',
      period: '2023 - Present',
      company: 'The Apollo University',
      responsibilities: [
        'Organizing community cleaning drives and environmental awareness campaigns',
        'Leading medical awareness programs for underserved communities',
        'Coordinating tree plantation activities and sustainability initiatives',
        'Mobilizing students for social service and community development projects',
      ],
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
            <h2 className="text-white">Experience</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-6 h-6 text-violet-400" />
            </button>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-violet-500/20 border border-violet-500/30">
                    <Briefcase className="w-6 h-6 text-violet-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-white mb-1">{exp.title}</h3>
                        <p className="text-violet-400">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="text-violet-400 mt-1">→</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
