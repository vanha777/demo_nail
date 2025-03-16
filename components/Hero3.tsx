'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    console.log("this is mobile check", isMobile);
  }, [isMobile])

  return (
    <section className="bg-gray-100 relative overflow-hidden min-h-screen flex items-center px-4 md:px-8">
      {/* Subtle diagonal lines pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.03, 0.05, 0.03],
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
              className="absolute w-full bg-gray-400/20"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF69B4] to-[#FFD700] bg-clip-text text-transparent">
                TRANSFORM YOUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF69B4] to-[#FFD700] bg-clip-text text-transparent">
                SOCIAL PRESENCE
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              We Help Nail Salons & Beauty Businesses Grow with Digital Marketing That Works.
            </p>
          </motion.div>

          {/* Right side image */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient background box */}
            <div className="absolute inset-4 -rotate-6 rounded-3xl bg-gradient-to-br from-pink-300 via-yellow-200 to-pink-200 transform hover:rotate-0 transition-transform duration-300">
              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${10 + 80 * Math.random()}%`,
                    top: `${10 + 80 * Math.random()}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            
            {/* Image container */}
            <div className="relative p-6">
              <img
                src={isMobile ? "/hero3ne.png" : "/hero3ne.png"}
                alt="Hero Image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}