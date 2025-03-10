'use client'

import { motion } from 'framer-motion'
import { FaAdversal, FaCalendarCheck, FaInstagram, FaLaptopCode, FaPalette, FaSearchLocation } from 'react-icons/fa'
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
      title: "Social Media Management",
      description: "We create, schedule, and manage engaging posts so your salon stays active online—without you lifting a finger.",
      icon: FaInstagram, // Social media icon
    },
    {
      title: "Facebook & Google Ads",
      description: "We design high-converting ads that attract local clients and fill your appointment book.",
      icon: FaAdversal, // Advertising icon
    },
    {
      title: "Website Creation & Optimization",
      description: "Get a stunning, mobile-friendly website that turns visitors into loyal customers.",
      icon: FaLaptopCode, // Website/coding icon
    },
    {
      title: "Online Booking System Setup",
      description: "Make it easy for clients to book 24/7 with a seamless online scheduling system.",
      icon: FaCalendarCheck, // Calendar/booking icon
    },
    {
      title: "Branding & Content Creation",
      description: "From logos to graphics and photos, we help you stand out with a unique brand identity.",
      icon: FaPalette, // Design/creative icon
    },
    {
      title: "SEO & Local Search Optimization",
      description: "Make sure your salon shows up when people search on Google & Maps! We optimize your online presence so more customers can find & book you instantly.",
      icon: FaSearchLocation, // Changed to a search location icon which better represents SEO & local search
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
          <br className="mb-4" />
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
