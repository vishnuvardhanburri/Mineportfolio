import { motion } from 'motion/react';
import { X, Award } from 'lucide-react';
import hackathonCert from 'figma:asset/c4a2ce4f6bc4a10bf4d5bf778ccd61007ff51536.png';

interface CertificationsPortalProps {
  onClose: () => void;
}

export default function CertificationsPortal({ onClose }: CertificationsPortalProps) {
  const certifications = [
    {
      title: 'CISSP (Certified Information Systems Security Professional)',
      issuer: 'Simplilearn',
      year: '2024',
      description: 'Comprehensive cybersecurity certification covering security and risk management, asset security, and security architecture.',
    },
    {
      title: 'AWS Educate with Security',
      issuer: 'Amazon Web Services',
      year: '2024',
      description: 'Cloud computing and security fundamentals, focusing on AWS infrastructure and security best practices.',
    },
    {
      title: 'AI Fundamentals',
      issuer: 'IBM',
      year: '2024',
      description: 'Foundation in artificial intelligence concepts, machine learning algorithms, and practical AI applications.',
    },
    {
      title: 'Google Cloud Digital Transformation',
      issuer: 'Google Cloud',
      year: '2024',
      description: 'Digital transformation strategies using Google Cloud Platform, covering cloud architecture and modernization.',
    },
    {
      title: 'IIT Madras Cyber Security',
      issuer: 'NPTEL',
      year: '2024',
      description: 'Advanced cybersecurity concepts from IIT Madras, including cryptography, network security, and ethical hacking.',
    },
    {
      title: 'Hackathon Participant - Sandharnya Vikas Hackathon 1.0',
      issuer: 'Chandigarh University',
      year: '2023',
      description: 'Qualified for the final round of PAN-India Hackathon held at Chandigarh University, demonstrating creativity and innovation.',
      hasCertificate: true,
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
            <h2 className="text-white">Certifications</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-6 h-6 text-violet-400" />
            </button>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
                    <Award className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-violet-400">{cert.issuer}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{cert.year}</span>
                    </div>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                </div>

                {cert.hasCertificate && (
                  <div className="mt-4 border-t border-violet-500/20 pt-4">
                    <img 
                      src={hackathonCert} 
                      alt={cert.title}
                      className="w-full h-auto rounded-lg border border-violet-500/20"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Note */}
          <motion.div
            className="mt-8 p-6 bg-violet-500/10 border border-violet-500/30 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-violet-400 mb-2">Professional Development</h4>
            <p className="text-gray-300">
              Committed to continuous learning and professional development through industry-recognized certifications and hands-on experience in cutting-edge technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
