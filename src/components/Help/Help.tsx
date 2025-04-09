import React, { useRef } from 'react';
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
  ChevronRight
} from 'lucide-react';

const Help: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      delay: 0.2
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Email us at support@ignicult.com for detailed support requests or inquiries.",
      color: "from-red-500 to-yellow-500",
      delay: 0.4
    },
  ];

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. A password reset link will be sent to your registered email."
    },
    {
      question: "How do I join tournaments?",
      answer: "To join tournaments, navigate to the 'Tournaments' section from your dashboard, browse available tournaments, and click the 'Join' button."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, PayPal, and various cryptocurrency payment options including Bitcoin and Ethereum."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0b0b] to-[#2f0c0c] text-white
    max-[365px]:mt-[64px]
    ">
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
            <HelpCircle className="w-24 h-24 text-yellow-500" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
            variants={fadeInVariants}
          >
            Happy to Help You
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl"
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
            className="text-3xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Assist You?</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {supportMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#271212] to-[#451414] rounded-xl overflow-hidden"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${method.color} shadow-lg mr-4`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-gray-300">{method.description}</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-yellow-500 hover:text-yellow-400"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </motion.a>
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
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Questions</span>
            </motion.h2>
            <motion.p className="text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Find quick answers to common questions about our platform and services
            </motion.p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-[#341616] to-[#371111] rounded-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <details className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-xl font-medium">{item.question}</h3>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <motion.div 
                    className="mt-4 text-gray-300"
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