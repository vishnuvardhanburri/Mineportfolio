import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hello! I\'m Vishnu\'s AI, your friendly guide to his world! Ask me about his journey, Xavira Group\'s mission, technical skills, work experience, or collaboration opportunities. What would you like to know?' },
  ]);
  const [input, setInput] = useState('');

  const responses: Record<string, string> = {
    vishnu: "Hi! Vishnu Vardhan Burri is a passionate technologist, entrepreneur, and the Founder & CEO of Xavira Group: Tech Labs. With a GPA of 9.0, he's an Ex-Microsoft AI Intern, Full-Stack Developer, and AI & Cybersecurity specialist. He believes in using technology for social good and has experience at IIIT Allahabad and Ripan Technologies. His journey combines technical excellence with a heart for community service! 🚀",
    
    xavira: "Xavira Group: Tech Labs is Vishnu's dream turned reality! 💡 Founded in 2025, it's an innovation hub focused on AI, Cybersecurity, and Healthcare technology. The mission? Make technology accessible to everyone, especially underserved communities. Xavira builds intelligent security systems, healthcare solutions for rural areas, and empowers startups through innovation labs. It's not just a company—it's a movement for positive change! ✨",
    
    experience: "Vishnu has an impressive journey! 🌟 He was an AI Developer Intern at Microsoft (Jan-Mar 2025) working on predictive healthcare analytics, an Ethical Hacking Intern at IIIT Allahabad (Oct 2024-Mar 2025) focusing on penetration testing and HIPAA compliance, and a Full-Stack Developer at Ripan Technologies (Mar-Jul 2025) building React + Node.js applications. Plus, he's Vice President of the Coding Club where he teaches juniors programming, and NSS Coordinator since 2023, organizing community service initiatives!",
    
    skills: "Vishnu is a true tech polymath! 💻 He's proficient in:\n• AI/ML: TensorFlow, Scikit-learn, PyTorch\n• Full-Stack: React, Node.js, Django, Flask\n• Languages: Java, Python, TypeScript, R\n• Cybersecurity: Ethical Hacking, Metasploit, Wireshark\n• Cloud: AWS, Docker, Kubernetes\n• Plus soft skills like leadership, cross-cultural communication, and agile methodology!",
    
    education: "Vishnu is currently pursuing B.Tech in Computer Science Engineering (Cybersecurity) at The Apollo University with an outstanding GPA of 9.0! 🎓 He completed his Intermediate MPC from Narayana Junior College (2021-2023), where his foundation in problem-solving began. He's also earned certifications from Simplilearn (CISSP), AWS, IBM, Google Cloud, and IIT Madras!",
    
    contact: "Want to connect with Vishnu? 📧 Reach him at vishnuvardhanburri19@gmail.com or check out his portfolio at vishnunani.vercel.app. He's also active on LinkedIn and GitHub. Whether you're looking for collaboration, consulting, or just want to chat about tech and innovation, he'd love to hear from you!",
    
    opportunities: "Vishnu is open to exciting opportunities! 🚀 He's available for:\n• Full-time roles in AI, Cybersecurity, or Full-Stack Development\n• Consulting projects for startups and enterprises\n• Speaking engagements about tech entrepreneurship\n• Collaboration on social impact tech projects\nHe's particularly interested in projects that combine technical innovation with social good. Let's build something amazing together!",
    
    nss: "As NSS Coordinator since 2023, Vishnu demonstrates his commitment to service! 🤝 He leads initiatives including cleaning drives, medical awareness campaigns, and tree plantation activities. This role reflects his core belief: technology should serve people, and we should give back to our communities. It's where his passion for social impact truly shines!",
    
    teaching: "As Vice President of the Coding Club, Vishnu is passionate about teaching and mentoring juniors! 👨‍🏫 He conducts programming workshops, guides students through coding challenges, and shares his knowledge to inspire the next generation of developers. He believes that teaching is one of the best ways to give back and strengthen the tech community. It's not just about coding—it's about building confidence and creating opportunities!",
    
    leadership: "Vishnu has held multiple leadership positions! He's the Vice President of the Coding Club where he teaches juniors programming, NSS Coordinator organizing community service initiatives, and Founder & CEO of Xavira Group. His leadership style focuses on empowerment, mentorship, and creating positive impact. Whether it's teaching code or organizing social drives, he leads with purpose and passion! 🌟",
    
    hackathon: "In 2023, Vishnu participated in the Sandharnya Vikas Hackathon 1.0 and qualified for the final round at Chandigarh University! 🏆 This pan-India competition tested creativity, innovation, and technical skills. It was a defining moment that proved ideas matter and set the stage for founding Xavira Group!",
    
    languages: "Vishnu is multilingual! 🌍 He speaks:\n• English (Fluent) - Professional communication\n• Telugu (Native) - Mother tongue\n• Tamil (Conversational) - South Indian connection\n• Hindi (Conversational) - National language\nThis linguistic diversity helps him connect with people across India and build inclusive solutions!",
    
    foundation: "The Xavira Foundation is the social impact arm of Xavira Group! ❤️ It aims to democratize technology by providing accessible cybersecurity solutions, bringing healthcare tech to rural areas, and empowering the next generation of innovators. Every project is built with the goal of creating positive change in underserved communities.",
    
    microsoft: "At Microsoft (Jan-Mar 2025), Vishnu worked on cutting-edge AI healthcare solutions! 💼 He developed predictive analytics models, implemented advanced data security protocols, and collaborated on AI-driven diagnostics. This experience showed him how enterprise-level AI can save lives, inspiring much of Xavira's healthcare focus.",
    
    hello: "Hello there! 👋 I'm Xavira AI, your friendly assistant powered by Xavira Group! I'm here to tell you all about Vishnu's incredible journey, the amazing work at Xavira, and how technology can change the world. What would you like to know? Ask me about Vishnu, Xavira, skills, experience, or opportunities!",
    
    hi: "Hey! 😊 Great to meet you! I'm here to share Vishnu's story and the vision behind Xavira Group. Whether you're curious about his technical skills, entrepreneurial journey, or how to collaborate, just ask! What interests you most?",
    projects: "Vishnu has built 12+ incredible projects! 🚀 Some highlights:\n• Xavira AI Healthcare Assistant - AI chatbot serving 500+ patients\n• SecureVault - Blockchain security protecting 10K+ records\n• SmartMed - Predictive analytics reducing emergency cases by 35%\n• CyberShield - Automated penetration testing for 50+ orgs\n• MediConnect - Telemedicine platform with 1,500+ consultations\n• VoiceHealth - AI voice diagnosis screening 3,000+ patients\nEach project combines cutting-edge tech with real-world impact! Check out the Projects portal for more details.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Enhanced keyword matching with multiple keywords
    const lowerInput = input.toLowerCase();
    let response = "That's a great question! 🤔 I can help you learn about:\n• Vishnu's journey and background\n• Xavira Group and its mission\n• Technical skills and expertise\n• Work experience at Microsoft, IIIT, and Ripan\n• Education and certifications\n• Languages and communication\n• Opportunities for collaboration\n\nWhat would you like to explore?";

    // Check for greetings first
    if (lowerInput.match(/^(hi|hello|hey|greetings)/)) {
      response = responses.hello || responses.hi;
    } 
    // Then check for specific topics
    else {
      for (const [key, value] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }
      
      // Additional contextual matching
      if (lowerInput.includes('about') || lowerInput.includes('who')) {
        response = responses.vishnu;
      } else if (lowerInput.includes('work') || lowerInput.includes('job')) {
        response = responses.experience;
      } else if (lowerInput.includes('study') || lowerInput.includes('college')) {
        response = responses.education;
      } else if (lowerInput.includes('speak') || lowerInput.includes('language')) {
        response = responses.languages;
      } else if (lowerInput.includes('reach') || lowerInput.includes('email')) {
        response = responses.contact;
      } else if (lowerInput.includes('company') || lowerInput.includes('startup')) {
        response = responses.xavira;
      } else if (lowerInput.includes('teach') || lowerInput.includes('mentor') || lowerInput.includes('coding club')) {
        response = responses.teaching;
      } else if (lowerInput.includes('leader') || lowerInput.includes('vice president')) {
        response = responses.leadership;
      } else if (lowerInput.includes('project') || lowerInput.includes('built') || lowerInput.includes('portfolio')) {
        response = responses.projects || "Vishnu has built 12+ incredible projects! 🚀 From AI healthcare assistants to blockchain security, telemedicine platforms to IoT security frameworks - each project combines cutting-edge tech with real-world impact. Check out the Projects portal to explore them all!";
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full shadow-[0_0_30px_rgba(126,34,206,0.6)] border border-violet-400/30"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-blue-900/60 to-violet-900/60 backdrop-blur-md border border-violet-500/40 rounded-2xl shadow-[0_0_50px_rgba(126,34,206,0.4)] overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-4 border-b border-violet-500/30">
                <h3 className="text-white">Vishnu's AI</h3>
                <p className="text-violet-100">Your personal guide</p>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-violet-600 text-white'
                          : 'bg-white/10 text-gray-200 border border-violet-500/20'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-violet-500/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-2 bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/60 transition-all"
                  />
                  <motion.button
                    onClick={handleSend}
                    className="p-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
