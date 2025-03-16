'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Sofia Nguyen",
      role: "5-Year Loyal Client",
      image: "/customer1.jpg", // Replace with actual image path
      quote: "I've been exclusively using Glaze's ageLOC products for 5 years now, and the results are incredible. My weekly manicures combined with their Galvanic Spa treatments have completely transformed my hands - they look 10 years younger! The staff's expertise in recommending the right products for my skin type keeps me coming back.",
    },
    {
      name: "Fiano Pham",
      role: "3-Year VIP Member",
      image: "/customer2.jpg", // Replace with actual image path
      quote: "Started with just monthly manicures, but after trying their ageLOC Boost System, I was hooked! Three years later, I'm here every two weeks for nail care and facial treatments. The Enhancer Skin Conditioning Gel has become my holy grail product - it's perfect for Houston's humid weather. The results speak for themselves!",
    },
    {
      name: "Lisa Wong",
      role: "4-Year Regular Client",
      image: "/customer3.jpg", // Replace with actual image path
      quote: "Four years of consistent nail care and Glaze's skincare routine have made such a difference. Their ageLOC Tru Face Essence Ultra combined with regular manicures has kept my hands looking youthful and professional. As someone who tried countless salons before, I can say their expertise in both nail care and anti-aging treatments is unmatched.",
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#FFF5E6] to-[#FFF0DB] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Desktop Testimonial Carousel */}
          <div className="hidden md:block">
            <div className="relative bg-white rounded-3xl shadow-md p-8">
              <div className="flex items-center gap-8">
                <motion.div
                  key={`image-${activeTestimonial}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#FF6B35]/20 shadow-lg"
                >
                  <Image 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initial letter if image fails to load
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<div class="w-full h-full bg-[#FF6B35] flex items-center justify-center text-white text-4xl font-bold">
                        ${testimonials[activeTestimonial].name.charAt(0)}
                      </div>`;
                    }}
                  />
                </motion.div>

                <div className="flex-1">
                  <motion.p
                    key={`quote-${activeTestimonial}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl text-black/80 mb-6"
                  >
                    "{testimonials[activeTestimonial].quote}"
                  </motion.p>

                  <motion.div
                    key={`info-${activeTestimonial}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-bold text-black">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-[#FF6B35]">{testimonials[activeTestimonial].role}</p>
                  </motion.div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index
                        ? 'bg-[#FF6B35] w-8'
                        : 'bg-gray-300 hover:bg-[#FF6B35]/50'
                      }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Testimonial Cards */}
          <div className="md:hidden">
            <motion.div
              key={`mobile-${activeTestimonial}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-md p-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#FF6B35]/20 mb-4">
                <Image 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initial letter if image fails to load
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="w-full h-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold">
                      ${testimonials[activeTestimonial].name.charAt(0)}
                    </div>`;
                  }}
                />
              </div>

              <p className="text-lg text-black/80 mb-4 text-center">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="text-center">
                <h4 className="text-lg font-bold text-black">{testimonials[activeTestimonial].name}</h4>
                <p className="text-[#FF6B35]">{testimonials[activeTestimonial].role}</p>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === index
                        ? 'bg-[#FF6B35] w-6'
                        : 'bg-gray-300 hover:bg-[#FF6B35]/50'
                      }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
