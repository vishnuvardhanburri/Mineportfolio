import { motion } from 'motion/react';
import { X, Mail, Globe, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface ContactPortalProps {
  onClose: () => void;
}

export default function ContactPortal({ onClose }: ContactPortalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open default email client with pre-filled data
    window.location.href = `mailto:vishnuvardhanburri19@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setShowSuccess(true);
    toast.success('Opening your email client...');
    
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <h2 className="text-white">Get In Touch</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-violet-500/30 hover:border-violet-500/60 transition-all"
            >
              <X className="w-6 h-6 text-violet-400" />
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-violet-400 mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all shadow-lg hover:shadow-violet-500/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-violet-400 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-violet-400" />
                    <h4 className="text-white">Email</h4>
                  </div>
                  <a 
                    href="mailto:vishnuvardhanburri19@gmail.com" 
                    className="text-gray-300 hover:text-violet-400 transition-colors"
                  >
                    vishnuvardhanburri19@gmail.com
                  </a>
                </div>

                {/* Portfolio */}
                <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-violet-400" />
                    <h4 className="text-white">Portfolio</h4>
                  </div>
                  <a 
                    href="https://vishnunani.netlify.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-violet-400 transition-colors"
                  >
                    vishnunani.netlify.app
                  </a>
                </div>

                {/* Social Links */}
                <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4">
                  <h4 className="text-white mb-3">Connect With Me</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-violet-500/20 border border-violet-500/30 rounded-lg hover:bg-violet-500/30 transition-all"
                    >
                      <Linkedin className="w-5 h-5 text-violet-400" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-violet-500/20 border border-violet-500/30 rounded-lg hover:bg-violet-500/30 transition-all"
                    >
                      <Github className="w-5 h-5 text-violet-400" />
                    </a>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
                  <h4 className="text-violet-400 mb-2">Open to Opportunities</h4>
                  <p className="text-gray-300">
                    Open to opportunities and collaborations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Success Modal */}
          {showSuccess && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-8 shadow-[0_0_50px_rgba(126,34,206,0.6)] text-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-white mb-2">Message Sent!</h3>
                <p className="text-violet-100">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}