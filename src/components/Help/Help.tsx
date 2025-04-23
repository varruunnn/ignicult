import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Globe, 
  ArrowDown, 
  Phone, 
  HelpCircle, 
  MessageCircle, 
  Clock,
  ChevronRight,
  X
} from 'lucide-react';
import { FaDiscord } from "react-icons/fa6";

const Help: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [emailAlertMessage, setEmailAlertMessage] = useState('');

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@ignicult.com');
    const mailtoTimeout = setTimeout(() => {
      setEmailAlertMessage('Email copied to clipboard: contact@ignicult.com');
      setShowEmailAlert(true);
      setTimeout(() => setShowEmailAlert(false), 4000);
    }, 300);
    window.location.href = 'mailto:contact@ignicult.com';
    window.addEventListener('blur', () => {
      clearTimeout(mailtoTimeout);
    }, { once: true });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-10, 10, -10],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const supportMethods = [
    {
      icon: MessageSquare,
      title: "Connect on X (Twitter)",
      description: "Connect with us on X (Twitter) for any support queries or feedback. Follow us and send a message to our handle @ignicult.",
      color: "from-blue-600 to-blue-400",
      delay: 0.2,
      link: "https://x.com/ignicult"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Email us at contact@ignicult.com for detailed support requests or inquiries.",
      color: "from-red-500 to-yellow-500",
      delay: 0.4,
      action: handleEmailClick
    },
    {
      icon: FaDiscord,
      title: "Discord Help Center",
      description: "Get real-time support from our team and community members in our dedicated help channels on Discord.",
      color: "from-purple-600 to-purple-400",
      delay: 0.8,
      link: "https://discord.gg/V9DGZvFNme"
    }
  ];

  const faqItems = [
    {
      question: "What is Ignicult?",
      answer: "A Web3 gaming platform where players earn tokens (Cultix) by playing hyper-casual games, sharing content, and completing challenges."
    },
    {
      question: "Do I need to install anything?",
      answer: "Nope! Just visit the website, connect your wallet, and start playing right from your browser."
    },
    {
      question: "How do I earn tokens?",
      answer: "Earn Cultix by winning games, ranking on leaderboards, or completing social tasks like boosting content."
    },
    {
      question: "Is it free to play?",
      answer: "Yes! You don't need to pay anything to start playing or earning."
    },
    {
      question: "How is my data protected?",
      answer: "Your identity is your wallet. We collect no personal data, and all game stats are tied to your on-chain profile."
    },
    {
      question: "What kind of rewards can I redeem?",
      answer: "You can redeem Cultix for vouchers, premium features, and exclusive perks via the Redemption Center—no gas fees involved."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0b0b] to-[#2f0c0c] text-white">
      {showEmailAlert && (
        <motion.div 
          className="fixed top-4 right-4 bg-green-800 text-white p-4 rounded-lg shadow-lg z-50 flex items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <span>{emailAlertMessage}</span>
          <button onClick={() => setShowEmailAlert(false)} className="ml-4">
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
      
      <motion.section 
        className="relative h-80 sm:h-96 flex flex-col items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-yellow-500 opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block mb-6"
            initial="initial"
            animate="animate"
            variants={floatingVariants}
          >
            <HelpCircle className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500" />
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
            variants={fadeInVariants}
          >
            Happy to Help You
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl"
            variants={fadeInVariants}
          >
            We're committed to providing you with the best support experience possible
          </motion.p>
        </motion.div>

        <motion.button
          className="absolute bottom-8 flex flex-col items-center text-yellow-500"
          onClick={scrollToFooter}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.section>
      <motion.section 
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
            variants={itemVariants}
          >
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Assist You?</span>
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {supportMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#271212] to-[#451414] rounded-xl overflow-hidden h-full"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${method.color} shadow-lg mb-4`}>
                      {method.icon === FaDiscord ? (
                        <FaDiscord className="w-8 h-8 text-white" />
                      ) : (
                        <method.icon className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-gray-300">{method.description}</p>
                  </div>
                  <div className="mt-auto">
                    {method.link ? (
                      <motion.a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Learn more
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </motion.a>
                    ) : method.action ? (
                      <motion.button
                        onClick={method.action}
                        className="inline-flex items-center justify-center w-full py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Contact us
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </motion.button>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 px-6 bg-[#240c0c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Questions</span>
            </motion.h2>
            <motion.p className="text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Find quick answers to common questions about our platform and services
            </motion.p>
          </motion.div>

          <motion.div className="space-y-4 sm:space-y-6" variants={containerVariants}>
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-[#341616] to-[#371111] rounded-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <details className="group p-4 sm:p-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg sm:text-xl font-medium">{item.question}</h3>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <motion.div 
                    className="mt-4 text-gray-300 text-sm sm:text-base"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <div ref={footerRef} />
    </div>
  );
};

export default Help;