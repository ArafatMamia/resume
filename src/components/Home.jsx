// src/components/Home.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home({ navigateTo }) {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0
  })

  useEffect(() => {
    const animateStats = () => {
      const interval = setInterval(() => {
        setStats(prev => ({
          projects: Math.min(prev.projects + 1, 20),
          clients: Math.min(prev.clients + 1, 18),
          experience: Math.min(prev.experience + 1, 5)
        }))
      }, 50)

      setTimeout(() => clearInterval(interval), 2000)
    }

    animateStats()
  }, [])

  const floatingCards = [
    { 
      icon: 'fab fa-wordpress', 
      title: 'WordPress', 
      desc: 'Custom Themes & Plugins',
      orbit: 'animate-home-orbit-1',
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
    },
    { 
      icon: 'fas fa-shopping-cart', 
      title: 'WooCommerce', 
      desc: 'E-commerce Solutions',
      orbit: 'animate-home-orbit-2',
      position: 'top-1/2 right-0 -translate-y-1/2 translate-x-1/2'
    },
    { 
      icon: 'fas fa-puzzle-piece', 
      title: 'Plugins', 
      desc: 'Custom Functionality',
      orbit: 'animate-home-orbit-3',
      position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
    },
    { 
      icon: 'fas fa-rocket', 
      title: 'Performance', 
      desc: 'Optimized & Fast',
      orbit: 'animate-home-orbit-4',
      position: 'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
    },
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute size-96 bg-secondary/10 rounded-full blur-3xl top-10 right-10 animate-float"></div>
        <div className="absolute size-72 bg-accent/10 rounded-full blur-3xl bottom-20 left-10 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute size-48 bg-secondary/10 rounded-full blur-3xl top-40 left-20 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-text"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              WordPress <span className="text-secondary">Specialist</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl sm:text-3xl text-secondary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Arafat Mamia
            </motion.div>

            <motion.div 
              className="space-y-4 text-base sm:text-lg text-text-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                Specialized WordPress developer with{' '}
                <span className="text-secondary font-semibold">5+ years of experience</span>{' '}
                in custom theme development, WooCommerce, and plugin creation.
              </p>
              <p>
                I build <span className="text-secondary font-semibold">high-performance WordPress solutions</span>{' '}
                using modern technologies like theme.json, FSE, and Gutenberg blocks.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button 
                onClick={() => navigateTo('projects')}
                className="btn bg-gradient-to-r from-secondary to-accent border-0 hover:from-accent hover:to-secondary transition-all duration-300"
              >
                View WordPress Projects
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="btn btn-outline border-secondary text-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300"
              >
                Hire WordPress Expert
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {[
                { number: stats.projects, label: 'Projects Completed' },
                { number: stats.clients, label: 'Happy Clients' },
                { number: stats.experience, label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-4 text-center transition-all duration-400 hover:-translate-y-2 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">{stat.number}+</div>
                  <div className="text-xs sm:text-sm text-text-light mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-80 sm:h-96 lg:h-[500px] flex justify-center items-center"
          >
            {/* Central Element */}
            <motion.div 
              className="relative size-48 sm:size-60 lg:size-80 glass rounded-full overflow-hidden z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <div className="absolute inset-0 bg-gradient-conic from-transparent via-secondary to-transparent animate-spin" 
                   style={{ animationDuration: '15s' }}></div>
              <div className="absolute inset-2 bg-darker rounded-full"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8">
                <motion.i 
                  className="fab fa-wordpress text-3xl sm:text-4xl lg:text-6xl text-secondary mb-2 sm:mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.i>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text">WordPress Expert</h3>
              </div>
            </motion.div>

            {/* Orbiting Cards */}
            <div className="absolute inset-0">
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`absolute size-32 sm:size-36 lg:size-44 bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl flex flex-col justify-center items-center p-3 sm:p-4 lg:p-6 text-center cursor-pointer border border-gray-700/50 backdrop-blur-md shadow-lg ${card.orbit} ${card.position}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: '#3498db',
                    transition: { duration: 0.3 }
                  }}
                >
                  <i className={`${card.icon} text-2xl sm:text-3xl lg:text-4xl text-secondary mb-2 sm:mb-3`}></i>
                  <h4 className="font-bold text-sm sm:text-base lg:text-lg text-text mb-1 sm:mb-2">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-text-light leading-tight">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: 'fas fa-paint-brush',
              title: 'Custom Themes',
              description: 'Figma to WordPress conversion using theme.json and Full Site Editing'
            },
            {
              icon: 'fas fa-shopping-cart',
              title: 'WooCommerce',
              description: 'E-commerce solutions with custom functionality and payment integration'
            },
            {
              icon: 'fas fa-code',
              title: 'Plugin Development',
              description: 'Custom WordPress plugins with REST API integration and advanced features'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 text-center backdrop-blur-md border border-gray-700/50 hover:border-secondary transition-all duration-400 hover:-translate-y-2"
            >
              <div className="size-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h4 className="font-bold text-lg text-text mb-2">{service.title}</h4>
              <p className="text-text-light text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}