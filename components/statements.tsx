'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaPiggyBank, FaChartLine, FaShieldAlt, FaCode, FaBolt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Statements() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const cards = [
    {
      title: "Streamline Social Management",
      description: "Our comprehensive dashboard lets you create, schedule, and manage content across all social platforms from one place. Focus on strategy, not juggling multiple apps.",
      icon: FaRocket,
    },
    {
      title: "Maximize ROI",
      description: "Our data-driven approach helps optimize your social media spend, delivering up to 70% better engagement rates and higher conversion rates for your marketing budget.",
      icon: FaPiggyBank,
    },
    {
      title: "Boost Engagement",
      description: "Leverage our AI-powered content strategies and timing optimization to consistently reach and engage your target audience across all social platforms.",
      icon: FaChartLine,
    },
    {
      title: "Stay Ahead of Trends",
      description: "Social media moves fast. Our team keeps you at the forefront of emerging platforms, algorithm changes, and content trends to maintain your competitive edge.",
      icon: FaShieldAlt,
    },
    {
      title: "Expert Strategy & Execution",
      description: "Skip the costly trial and error of social media marketing. Our experienced team crafts and executes winning strategies tailored to your business goals.",
      icon: FaCode,
    },
    {
      title: "Seamless Integration",
      description: "From content creation to analytics, we integrate smoothly with your existing marketing efforts. Start seeing results in days, not months.",
      icon: FaBolt,
    },
  ];
  

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden flex items-center justify-center px-2 md:px-4 text-gray-800 py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-400 rounded-full filter blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-400 rounded-full filter blur-[120px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-400 rounded-full filter blur-[150px] opacity-20" />

        {/* Diagonal lines pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                height: ['1px', '2px', '1px']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{ 
                top: `${(i + 1) * 5}%`,
                transform: 'rotate(-45deg)',
                transformOrigin: 'center'
              }}
              className="absolute w-full bg-violet-300/30"
            />
          ))}
        </div>
      </div>

      <motion.div
        className="w-full relative z-10 px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-32 mt-32">
          <span className="text-gray-800">WE ARE HERE</span>
          <br className="mb-4"/>
          <span className="bg-gradient-to-r from-[#FF69B4] to-[#FFD700] bg-clip-text text-transparent">
            FOR YOUR BUSINESS
          </span>
        </h1>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-8'} w-full max-w-6xl mx-auto`}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-3 bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-pink-200 hover:border-pink-300 transition-colors shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center items-center w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-100 to-yellow-100">
                <card.icon className="w-12 h-12 text-pink-500" />
              </div>

              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#FF69B4] to-[#FFD700] bg-clip-text text-transparent">
                  {card.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
