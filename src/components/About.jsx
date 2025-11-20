// src/components/About.jsx
import { motion } from 'framer-motion'

export default function About({ navigateTo }) {
  const floatingCards = [
    { 
      icon: 'fab fa-wordpress', 
      title: 'WordPress Expert', 
      desc: 'Custom Themes & Plugins', 
      orbit: 'animate-orbit-1',
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
    },
    { 
      icon: 'fas fa-shopping-cart', 
      title: 'WooCommerce', 
      desc: 'E-commerce Solutions', 
      orbit: 'animate-orbit-2',
      position: 'top-1/2 right-0 -translate-y-1/2 translate-x-1/2'
    },
    { 
      icon: 'fas fa-rocket', 
      title: 'Fast Performance', 
      desc: 'Optimized WordPress', 
      orbit: 'animate-orbit-3',
      position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
    },
    { 
      icon: 'fas fa-mobile-alt', 
      title: 'Responsive', 
      desc: 'All Devices', 
      orbit: 'animate-orbit-4',
      position: 'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
    },
  ]

  const skills = [
    { name: 'WordPress Development', level: 95 },
    { name: 'Custom Theme Development', level: 90 },
    { name: 'WooCommerce', level: 85 },
    { name: 'PHP & MySQL', level: 88 },
    { name: 'Frontend Development', level: 92 },
    { name: 'API Integration', level: 85 },
  ]

  const wordpressExpertise = [
    {
      icon: 'fas fa-palette',
      title: 'Custom Themes',
      items: ['theme.json', 'FSE', 'Gutenberg Blocks', 'Responsive Design']
    },
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Plugin Development',
      items: ['Custom Functionality', 'REST API', 'ACF Pro', 'CPT']
    },
    {
      icon: 'fas fa-store',
      title: 'WooCommerce',
      items: ['Online Stores', 'Payment Gateways', 'Inventory Management', 'Custom Checkout']
    }
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute size-96 bg-secondary/10 rounded-full blur-3xl top-10 right-10 animate-float"></div>
        <div className="absolute size-72 bg-accent/10 rounded-full blur-3xl bottom-20 left-10 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute size-48 bg-secondary/10 rounded-full blur-3xl top-40 left-20 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div 
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 backdrop-blur-md border border-gray-700/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-text mb-4">
                WordPress <span className="text-secondary">Specialist</span>
              </h1>
              
              <div className="text-xl sm:text-2xl text-secondary font-medium mb-6">
                Custom Theme & Plugin Developer
              </div>

              <div className="space-y-4 text-base sm:text-lg text-text-light">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm a specialized <span className="text-secondary font-semibold">WordPress developer</span> focused on 
                  creating custom themes using modern WordPress technologies like{' '}
                  <span className="text-secondary font-semibold">theme.json, Full Site Editing, and Gutenberg blocks</span>.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  With expertise in <span className="text-secondary font-semibold">WooCommerce, custom plugin development, and API integrations</span>, 
                  I build scalable, high-performance WordPress solutions that drive business growth and deliver exceptional user experiences.
                </motion.p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
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
                { number: '20+', label: 'Projects Completed' },
                { number: '18+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-4 text-center transition-all duration-400 hover:-translate-y-2 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-text-light mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
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
          </motion.div>

          {/* Visual Content - ORBITING CARDS SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-80 sm:h-96 lg:h-[500px] flex justify-center items-center"
          >
            {/* Central Element */}
            <motion.div 
              className="relative size-48 sm:size-60 lg:size-72 glass rounded-full overflow-hidden z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <div className="absolute inset-0 bg-gradient-conic from-transparent via-secondary to-transparent animate-spin" 
                   style={{ animationDuration: '15s' }}></div>
              <div className="absolute inset-2 bg-darker rounded-full"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8">
                <motion.i 
                  className="fab fa-wordpress text-3xl sm:text-4xl lg:text-5xl text-secondary mb-2 sm:mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.i>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text">WordPress Specialist</h3>
              </div>
            </motion.div>

            {/* ORBITING CARDS CONTAINER */}
            <div className="absolute inset-0">
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`absolute size-32 sm:size-36 lg:size-40 bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl flex flex-col justify-center items-center p-3 sm:p-4 lg:p-5 text-center cursor-pointer border border-gray-700/50 backdrop-blur-md shadow-lg ${card.orbit} ${card.position}`}
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
                  <i className={`${card.icon} text-2xl sm:text-3xl text-secondary mb-1 sm:mb-2`}></i>
                  <h4 className="font-bold text-sm sm:text-base text-text mb-1">{card.title}</h4>
                  <p className="text-xs text-text-light leading-tight">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* WordPress Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 backdrop-blur-md border border-gray-700/50 mb-8"
        >
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold text-text mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            WordPress <span className="text-secondary">Expertise</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wordpressExpertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="bg-gradient-to-br from-black/60 to-gray-800/60 rounded-2xl p-6 border border-gray-600/50 hover:border-secondary transition-all duration-400 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white">
                    <i className={`${area.icon} text-lg`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-text">{area.title}</h4>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-text-light text-sm">
                      <i className="fas fa-check text-secondary text-xs"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 backdrop-blur-md border border-gray-700/50"
        >
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold text-text mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            Technical <span className="text-secondary">Skills</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-text font-semibold text-sm sm:text-base">{skill.name}</span>
                  <span className="text-secondary font-bold text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 2.0 + index * 0.1 }}
                    className="bg-gradient-to-r from-secondary to-accent h-2 sm:h-3 rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {[
            {
              icon: 'fas fa-bullseye',
              title: 'Mission',
              description: 'Build custom WordPress solutions that solve business problems and drive growth through modern WordPress technologies.'
            },
            {
              icon: 'fas fa-heart',
              title: 'Specialization',
              description: 'Focused on custom theme development, WooCommerce, and plugin development using modern WordPress stack.'
            },
            {
              icon: 'fas fa-rocket',
              title: 'Approach',
              description: 'Modern WordPress development with theme.json, FSE, Gutenberg blocks, and performance optimization.'
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + index * 0.1 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-4 sm:p-6 text-center backdrop-blur-md border border-gray-700/50 hover:border-secondary transition-all duration-400 hover:-translate-y-2"
            >
              <div className="size-12 sm:size-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 shadow-lg">
                <i className={`${card.icon} text-lg sm:text-2xl`}></i>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-text mb-2">{card.title}</h4>
              <p className="text-text-light text-xs sm:text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}