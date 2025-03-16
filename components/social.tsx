'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

const Social = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    {
      icon: <FiInstagram className="h-6 w-6" />,
      name: 'Instagram',
      url: 'https://www.instagram.com/sofia.socialbae',
      hoverText: 'See our latest designs! ✨'
    },
    {
      icon: <FiFacebook className="h-6 w-6" />,
      name: 'Facebook',
      url: 'https://www.facebook.com/sofiang2407',
      hoverText: 'Join our community! 👋'
    },
    {
      icon: <SiTiktok className="h-6 w-6" />,
      name: 'TikTok',
      url: 'https://www.tiktok.com/@sofia.bossbae',
      hoverText: 'Watch our trending videos! 🎥'
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-r from-[#FFF5E6] to-[#FFF0DB]">
      {/* Fun background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-24 w-24 rounded-full bg-[#FF6B35]/5"
              initial={{ 
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Let's Be Friends! 🎉
              <span className="block h-1 w-24 bg-[#FF6B35] mx-auto mt-4"></span>
            </h2>
          </motion.div>
          <p className="text-lg text-black/80">
            Join our fabulous community and stay updated with the latest trends! ✨
          </p>
        </div>

        <motion.div
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-md p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div 
              className="flex items-start space-x-4" 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#FF6B35] p-3 rounded-full text-white shadow-lg">
                <FiMail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-black font-medium">Drop Us a Line! 💌</h4>
                <a 
                  href="mailto:sofiang2407@gmail.com" 
                  className="text-black/70 hover:text-[#FF6B35] transition-colors"
                >
                  sofiang2407@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4" 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#FF6B35] p-3 rounded-full text-white shadow-lg">
                <FiMapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-black font-medium">Find Us Here! 📍</h4>
                <p className="text-black/70">Hawthorn, Australia, VIC, 3123</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-gray-100 pt-8">
              <h4 className="font-medium text-black mb-6">Connect & Share! 🌟</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF6B35] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-opacity-90 transition-all"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm py-1 px-3 rounded-full"
                    >
                      {link.hoverText}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center pt-8 border-t border-gray-100"
            >
              <h4 className="font-bold text-xl mb-4 text-black">Ready for Amazing Nails? ✨</h4>
              <motion.a
                href="https://calendly.com/sofiang2407/30min"
                className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Session! 💅
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Social;