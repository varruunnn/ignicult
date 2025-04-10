import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaFire, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } }
  };

  const linkVariants = {
    hover: { x: 5, color: "#FCD34D", transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <footer className="bg-gradient-to-b border-t-2 border-[#3d2812] w-full h-auto from-[#0d0d0d] to-[#300a0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 opacity-10 blur-3xl"
          // animate={{ 
          //   x: ["-10%", "60%", "-10%"],
          //   y: ["30%", "60%", "30%"],
          // }}
          // transition={{ 
          //   repeat: Infinity, 
          //   duration: 15,
          //   ease: "easeInOut"
          // }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 opacity-10 blur-3xl right-0"
          // animate={{ 
          //   x: ["60%", "-10%", "60%"],
          //   y: ["10%", "40%", "10%"],
          // }}
          // transition={{ 
          //   repeat: Infinity, 
          //   duration: 18,
          //   ease: "easeInOut"
          // }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/logo.png" alt="Company Logo" className="w-16 h-18 drop-shadow-xl" />
              </motion.div>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                IGNICULT
              </motion.span>
            </motion.div>

            <motion.p className="text-gray-300 pr-6">
              Experience the ultimate gaming platform where passion meets competition. Join our community of players today!
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:mx-auto">
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ backgroundPosition: "0%" }}
              animate={{ backgroundPosition: "100%" }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
              style={{ 
                backgroundImage: "linear-gradient(90deg, #ef4743, #b55625, #ffae2f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200%"
              }}
            >
              <FaFire className="mr-2 text-yellow-500" /> Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {['Home', 'Profile', 'Games', 'Tournaments', 'Join Us', 'Contact Us'].map((link, index) => (
                <motion.li key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.a 
                    href={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
                    variants={linkVariants}
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 mr-2 inline-block"
                      variants={{
                        hover: { width: "16px" }
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
            >
              Connect With Us
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {[
                { icon: FaXTwitter , color: "bg-sky-500", url: "https://twitter.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl w-[100px] flex flex-col items-center ${social.color === "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" ? social.color : ""} hover:shadow-lg transition-all`}
                  style={{ background: social.color !== "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" ? social.color : undefined }}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <motion.div className="text-white text-3xl mb-1">
                    <social.icon />
                  </motion.div>
                  <motion.span className="text-white text-xs font-medium">
                    Follow Us
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="mt-6 bg-gradient-to-r from-[#582020] to-[#451414] p-4 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-300 text-sm">
                <span className="text-yellow-400 font-bold">Office:</span> 123 Gaming Street, E-Sports City, ES 12345
              </p>
              <p className="text-gray-300 text-sm mt-1">
                <span className="text-yellow-400 font-bold">Email:</span> contact@ignicult.com
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Reduced mt-12 to mt-6 for less spacing */}
        <motion.div 
          className="mt-6 border-t border-red-900 pt-6 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            variants={itemVariants}
          >
            &copy; {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 font-bold">IGNICULT</span>. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            variants={containerVariants}
          >
            {['Privacy Policy', 'Terms & Conditions', 'Cookies', 'FAQ'].map((link, index) => (
              <motion.a 
                key={index}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gray-400 text-sm hover:text-yellow-400 transition-all"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="h-1 w-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 mt-6 rounded-full"
          initial={{ backgroundPosition: "0%" }}
          animate={{ backgroundPosition: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{ backgroundSize: "200%" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
