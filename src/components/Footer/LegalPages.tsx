import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFileContract, FaCookieBite, FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const LegalPages = () => {
  const navigate = useNavigate();
  const { tabId } = useParams();
  const [activePage, setActivePage] = useState(tabId || 'privacy');
  useEffect(() => {
    window.scrollTo(0, 0);
    if (tabId && ['privacy', 'terms', 'cookies', 'faq'].includes(tabId)) {
      setActivePage(tabId);
    }
  }, [tabId]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const tabs = [
    { id: 'privacy', title: 'Privacy Policy', icon: FaShieldAlt },
    { id: 'terms', title: 'Terms & Conditions', icon: FaFileContract },
    { id: 'cookies', title: 'Cookies', icon: FaCookieBite },
    { id: 'faq', title: 'FAQ', icon: FaQuestionCircle },
  ];
  const handleTabChange = (tabId: string) => {
    setActivePage(tabId);
    navigate(`/legal/${tabId}`, { replace: true });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'privacy':
        return (
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              Privacy Policy
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300">
              At Ignicult, we respect your privacy and believe in giving you full control of your gaming experience. We do <span className="font-bold">not collect any personal information</span> like names, emails, or phone numbers. Your <span className="font-bold">crypto wallet is your identity</span>, and all your gameplay data—scores, sessions, rewards—is tied to that wallet.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              We only track:
            </motion.p>

            <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-2">
              <motion.li variants={itemVariants} className="text-gray-300">
                Wallet-based game activity (e.g., scores, rewards earned)
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Technical info (e.g., browser type, device) to improve performance
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Engagement events (like shares or in-game interactions)
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="text-gray-300 font-bold">
              You own your data.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              You can delete your data anytime by disconnecting your wallet or clearing your browser cookies. We never use your data for third-party advertising or resell purposes.
            </motion.p>
          </motion.div>
        );

      case 'terms':
        return (
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              Terms & Conditions
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300">
              By using Ignicult, you agree to:
            </motion.p>

            <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-2">
              <motion.li variants={itemVariants} className="text-gray-300">
                Respect fair play: no bots, no exploits, no abuse
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Participate honestly: all scores are verified before rewards
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Connect a wallet to access games, rewards, and profile features
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Play games for entertainment and rewards—not as investments or financial products
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="text-gray-300">
              All token rewards (Cultix) are subject to in-platform use only and are not investment advice. Ignicult reserves the right to suspend accounts or withhold rewards in case of suspicious or fraudulent activity.
            </motion.p>
          </motion.div>
        );

      case 'cookies':
        return (
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              Cookies Policy
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300">
              Ignicult uses <span className="font-bold">minimal cookies</span>—just enough to:
            </motion.p>

            <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-2">
              <motion.li variants={itemVariants} className="text-gray-300">
                Remember your wallet connection
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Load games faster
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                Keep you logged in across sessions
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-300">
                your gaming stats and activites to give cultiX and IgniX tokens accordingly
              </motion.li>
            </motion.ul>

            <motion.p variants={itemVariants} className="text-gray-300">
              We don't store personal identifiers or track you across other websites. You're free to <span className="font-bold">clear cookies anytime</span> without affecting your rewards or gameplay progress.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              Our cookies help improve your experience, not invade your privacy.
            </motion.p>
          </motion.div>
        );

      case 'faq':
        return (
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              Frequently Asked Questions
            </motion.h1>

            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div variants={itemVariants} className="bg-[#220a0a] p-4 rounded-lg hover:bg-[#2b0d0d] transition-all">
                <h3 className="text-yellow-400 font-bold">What is Ignicult?</h3>
                <p className="text-gray-300 mt-1">A Web3 gaming platform where players earn tokens (Cultix) by playing hyper-casual games, sharing content, and completing challenges.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-[#220a0a] p-4 rounded-lg hover:bg-[#2b0d0d] transition-all">
                <h3 className="text-yellow-400 font-bold">Do I need to install anything?</h3>
                <p className="text-gray-300 mt-1">Nope! Just visit the website, connect your wallet, and start playing right from your browser.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-[#220a0a] p-4 rounded-lg hover:bg-[#2b0d0d] transition-all">
                <h3 className="text-yellow-400 font-bold">How do I earn tokens?</h3>
                <p className="text-gray-300 mt-1">Earn Cultix by winning games, ranking on leaderboards, or completing social tasks like boosting content.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-[#220a0a] p-4 rounded-lg hover:bg-[#2b0d0d] transition-all">
                <h3 className="text-yellow-400 font-bold">Is it free to play?</h3>
                <p className="text-gray-300 mt-1">Yes! You don't need to pay anything to start playing or earning.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-[#220a0a] p-4 rounded-lg hover:bg-[#2b0d0d] transition-all">
                <h3 className="text-yellow-400 font-bold">How is my data protected?</h3>
                <p className="text-gray-300 mt-1">Your identity is your wallet. We collect no personal data, and all game stats are tied to your on-chain profile.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-[#220a0a] p-4 rounded-lg hover:bg-[#2b0d0d] transition-all">
                <h3 className="text-yellow-400 font-bold">What kind of rewards can I redeem?</h3>
                <p className="text-gray-300 mt-1">You can redeem Cultix for vouchers, premium features, and exclusive perks via the Redemption Center—no gas fees involved.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] to-[#300a0a] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 opacity-5 blur-3xl"
          animate={{
            x: ["-10%", "30%", "-10%"],
            y: ["30%", "60%", "30%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 opacity-5 blur-3xl right-0"
          animate={{
            x: ["60%", "10%", "60%"],
            y: ["10%", "40%", "10%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors mb-8"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-[#1a0a0a] rounded-xl p-4 sticky top-6">
              <motion.div
                className="space-y-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center text-sm md:text-base transition-all ${activePage === tab.id
                        ? 'bg-gradient-to-r from-red-700 to-red-900 text-white'
                        : 'text-gray-300 hover:bg-[#270c0c]'
                      }`}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <tab.icon className={`mr-2 ${activePage === tab.id ? 'text-yellow-400' : 'text-gray-400'}`} />
                    {tab.title}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            <motion.div
              className="bg-[#1a0a0a] rounded-xl p-6 md:p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activePage}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="h-1 w-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 mt-12 rounded-full"
          initial={{ backgroundPosition: "0%" }}
          animate={{ backgroundPosition: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{ backgroundSize: "200%" }}
        />
      </div>
    </div>
  );
};

export default LegalPages;