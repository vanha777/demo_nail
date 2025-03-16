'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "Manicures & Pedicures",
      description: "Keep your nails looking fresh and flawless. Want perfectly polished nails?",
      image: "/manicure.jpg"
    },
    {
      title: "Acrylic & Gel Extensions",
      description: "Get longer, stronger, and more stylish nails. Want stunning nail extensions?",
      image: "/extension.jpg"
    },
    {
      title: "Nail Art & Designs",
      description: "Express yourself with custom nail art. Want unique, eye-catching designs?",
      image: "/design.jpg"
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section id="services" className="bg-gradient-to-r from-[#FFF5E6] to-[#FFF0DB] relative overflow-hidden min-h-screen flex items-center px-4 md:px-8 py-10">
      <div className="container mx-auto relative z-10">
        <motion.p
          className="text-center text-[#FF6B35] text-sm md:text-base font-semibold uppercase tracking-wider mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Premium Services
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side content */}
          <motion.div
            className="w-full md:w-1/2"
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-black whitespace-pre-line">
                {services[currentSlide].title}
              </span>
            </h1>
            <p className="text-black text-lg mb-8">
              {services[currentSlide].description}
            </p>
            {/* CTA Button */}
            <a
              href="https://calendly.com/sofiang2407/30min"
              target="_blank"
              rel="noopener noreferrer"
              className=" mb-12 inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              Book Now
            </a>
            {/* Navigation arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-[#FF6B35] text-white p-4 rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#FF6B35] text-white p-4 rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            key={`image-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[30px] overflow-hidden shadow-lg aspect-square">
              <img
                src={services[currentSlide].image}
                alt={services[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#FF6B35] w-8' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}