// src/components/Projects.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'

// Import all images
import kodiProfessional from '../../public/images/kodiprofessional.jpg'
import wysemonk from '../../public/images/wysemonk.jpg'
import debretsionChurch from '../../public/images/debretsionchurch-wysemonk.jpg'
import hemophilia from '../../public/images/hemophilia.jpg'
import willowForde from '../../public/images/willowandforde.jpg'
import kesteDamena from '../../public/images/kestedamena.jpg'

// Import WordPress project images (you'll need to add these to your images folder)
// For now, I'll use placeholder imports - replace with actual images
import customThemeProject from '../../public/images/kodiprofessional.jpg'
import woocommerceStore from '../../public/images/kodiprofessional.jpg'
import customPlugin from '../../public/images/kodiprofessional.jpg'

export default function Projects({ navigateTo }) {
  const projects = [
    // WordPress Specialization Projects
    {
      id: 'wordpress-1',
      title: 'Custom WordPress Theme - Modern Business',
      description: 'Figma to WordPress conversion using theme.json and Full Site Editing. Custom Gutenberg blocks, responsive design, and optimized performance scoring 95+ on PageSpeed.',
      image: customThemeProject,
      technologies: ['WordPress', 'theme.json', 'FSE', 'Gutenberg', 'PHP', 'JavaScript'],
      github: '#',
      live: '#',
      category: 'WordPress',
      featured: true
    },
    {
      id: 'wordpress-2',
      title: 'E-Commerce Store - WooCommerce',
      description: 'Complete WooCommerce solution with custom product pages, checkout customization, payment gateway integration, and inventory management system.',
      image: woocommerceStore,
      technologies: ['WooCommerce', 'ACF Pro', 'Custom Checkout', 'Payment Gateway', 'PHP'],
      github: '#',
      live: '#',
      category: 'WordPress',
      featured: true
    },
    {
      id: 'wordpress-3',
      title: 'Custom Booking Plugin',
      description: 'Custom WordPress plugin for appointment scheduling with REST API integration, calendar management, and email notifications system.',
      image: customPlugin,
      technologies: ['WordPress Plugin', 'REST API', 'PHP', 'MySQL', 'JavaScript'],
      github: '#',
      live: '#',
      category: 'WordPress',
      featured: true
    },
    // Existing Projects
    {
      id: 1,
      title: 'Kodi Professional',
      description: 'Professional business website showcasing services and portfolio with modern design and responsive layout',
      image: kodiProfessional,
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: '#',
      live: 'https://kodiprofessional.ae/',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'Wysemonk Platform',
      description: 'Comprehensive platform with modern UI/UX design and seamless user experience',
      image: wysemonk,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: 'https://wysemonk.com/',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Debretsion Church',
      description: 'Church website with event management, donations, and community features',
      image: debretsionChurch,
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      github: '#',
      live: 'https://debretsionchurch.wysemonk.com/',
      category: 'WordPress'
    },
    {
      id: 4,
      title: 'Hemophilia Ethiopia',
      description: 'Healthcare platform providing information and support for hemophilia patients in Ethiopia',
      image: hemophilia,
      technologies: ['React', 'Node.js', 'MongoDB', 'Healthcare API'],
      github: '#',
      live: 'https://hemophilia.et/',
      category: 'Full Stack'
    },
    {
      id: 5,
      title: 'Willow & Forde',
      description: 'Elegant e-commerce platform for luxury goods with secure payment integration',
      image: willowForde,
      technologies: ['React', 'Stripe', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: 'https://willowandforde.co.uk/',
      category: 'E-commerce'
    },
    {
      id: 6,
      title: 'Keste Damena',
      description: 'Modern restaurant website showcasing menu, location, and dining experience with elegant design',
      image: kesteDamena,
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: '#',
      live: 'https://www.kestedamena.com/',
      category: 'Frontend'
    },
  ]

  const categories = ['All', 'WordPress', 'Frontend', 'Full Stack', 'E-commerce']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  // Get featured WordPress projects
  const featuredWordPressProjects = projects.filter(project => project.featured)

  return (
    <section className="min-h-screen py-20 bg-dark/70">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto"
        >
          Here are some of the projects I've worked on. Each one represents a unique challenge 
          and showcases different aspects of my full-stack development skills.
        </motion.p>

        {/* WordPress Specialization Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4">
              WordPress Specialization Projects
            </h3>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Focused on modern WordPress development using theme.json, Full Site Editing, 
              and custom functionality development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredWordPressProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl overflow-hidden border-2 border-secondary/30 backdrop-blur-md hover:border-secondary transition-all duration-400 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-secondary/20 text-secondary border border-secondary/30">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold backdrop-blur-md bg-black/50 px-3 py-1 rounded-full">
                      WordPress Specialist
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-light text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary to-accent border border-secondary rounded-lg text-white hover:from-accent hover:to-secondary transition-all duration-300 text-sm font-semibold group/link"
                    >
                      <i className="fas fa-external-link-alt group-hover/link:scale-110 transition-transform duration-300"></i>
                      Live Demo
                    </a>
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-black/80 to-gray-900/90 border border-gray-600/50 rounded-lg text-text-light hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 text-sm font-semibold group/link"
                      >
                        <i className="fab fa-github group-hover/link:scale-110 transition-transform duration-300"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/30'
                  : 'bg-gradient-to-br from-black/80 to-gray-900/90 text-text-light border border-gray-700/50 hover:border-secondary hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-md hover:border-secondary transition-all duration-400 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                    project.category === 'Frontend' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    project.category === 'Full Stack' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    project.category === 'E-commerce' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-12 right-4">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-accent/20 text-accent border border-accent/30">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold backdrop-blur-md bg-black/50 px-3 py-1 rounded-full">
                    Live Project
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-light text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary to-accent border border-secondary rounded-lg text-white hover:from-accent hover:to-secondary transition-all duration-300 text-sm font-semibold group/link"
                  >
                    <i className="fas fa-external-link-alt group-hover/link:scale-110 transition-transform duration-300"></i>
                    Live Demo
                  </a>
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-black/80 to-gray-900/90 border border-gray-600/50 rounded-lg text-text-light hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 text-sm font-semibold group/link"
                    >
                      <i className="fab fa-github group-hover/link:scale-110 transition-transform duration-300"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '8+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 text-center border border-gray-700/50 backdrop-blur-md hover:border-secondary transition-all duration-400"
            >
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">{stat.number}</div>
              <div className="text-text-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-8 backdrop-blur-md border border-gray-700/50">
            <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-light text-lg mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigateTo('contact')}
                className="btn bg-gradient-to-r from-secondary to-accent border-0 hover:from-accent hover:to-secondary transition-all duration-300"
              >
                Start a Project
              </button>
              <button 
                onClick={() => navigateTo('resume')}
                className="btn btn-outline border-secondary text-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300"
              >
                View My Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}