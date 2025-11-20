// src/components/Resume.jsx
import { motion } from 'framer-motion'

export default function Resume({ navigateTo }) {
  const contactInfo = [
    { icon: 'fas fa-phone', text: '+251-710-193-813' },
    { icon: 'fas fa-envelope', text: 'arafmamia001@gmail.com' },
    { icon: 'fas fa-map-marker-alt', text: 'Addis Ababa, Ethiopia' },
    { icon: 'fab fa-linkedin', text: 'linkedin.com/in/arafat-mamia-2779a3312' },
    { icon: 'fab fa-github', text: 'github.com/ArafatMamia' },
  ]

  const education = [
    { 
      title: 'Computer Engineering', 
      institution: 'Addis Ababa Science and Technology University',
    },
    { 
      title: 'Full Stack Software Engineering', 
      institution: 'ALX Africa',
    },
  ]

  const skills = [
    { 
      category: 'WordPress Specialization', 
      items: [
        'Custom Theme Development (theme.json, FSE)',
        'Gutenberg Blocks Development',
        'WooCommerce Setup & Customization',
        'ACF Pro & Custom Post Types',
        'WordPress REST API Integration',
        'Performance & Security Optimization'
      ] 
    },
    { 
      category: 'Frontend Development', 
      items: [
        'HTML5, CSS3, JavaScript (ES6+)',
        'React & Next.js',
        'Responsive Design',
        'Figma to WordPress Conversion',
        'Cross-browser Compatibility'
      ] 
    },
    { 
      category: 'Backend & Tools', 
      items: [
        'PHP (WordPress Development)',
        'Node.js, Express',
        'MySQL, Database Management',
        'Git, GitHub, GitLab',
        'cPanel & Hosting Management'
      ] 
    }
  ]

  const experiences = [
    {
      title: 'WordPress Developer - Custom Theme Specialist',
      company: 'Chainlinx Technologies | Addis Ababa, Ethiopia',
      date: '2024 – Present',
      points: [
        'Developed custom WordPress themes using theme.json and Full Site Editing (FSE)',
        'Built responsive business websites converting Figma designs to custom WordPress themes',
        'Implemented custom Gutenberg blocks for enhanced content editing experience',
        'Optimized website performance achieving 90+ PageSpeed scores',
        'Enhanced security measures and implemented SEO best practices',
      ]
    },
    {
      title: 'WordPress Developer',
      company: 'RSOP | United Kingdom (Remote)',
      date: '2023 – 2024',
      points: [
        'Developed custom WordPress plugins extending site functionality',
        'Integrated REST APIs and third-party services into WordPress',
        'Created custom post types and taxonomies using ACF Pro',
        'Improved SEO performance leading to increased organic traffic',
        'Troubleshot and resolved complex WordPress theme/plugin issues',
      ]
    }
  ]

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    const pdfUrl = '/cv/arafat-mamia-cv.pdf'
    link.href = pdfUrl
    link.download = 'Arafat-Mamia-WordPress-Developer-CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen py-20">
      <div className="w-full">
        <h2 className="section-heading">My Resume</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-secondary mb-4 relative inline-block">
                CONTACT
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-secondary"></div>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="size-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-lg">
                      <i className={item.icon}></i>
                    </div>
                    <div className="text-sm text-text-light">{item.text}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-secondary mb-4 relative inline-block">
                EDUCATION
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-secondary"></div>
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="font-semibold text-lg mb-1 text-text">{edu.title}</div>
                    <div className="text-secondary text-sm">{edu.institution}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-secondary mb-4 relative inline-block">
                TECHNICAL SKILLS
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-secondary"></div>
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="font-semibold mb-2 text-text text-sm bg-secondary/20 px-3 py-1 rounded-lg inline-block">
                      {skill.category}
                    </div>
                    <ul className="space-y-1 mt-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 + itemIndex * 0.1 }}
                          className="text-text-light pl-4 relative text-xs leading-relaxed"
                        >
                          <span className="absolute left-0 text-secondary">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
            >
              <div className="text-2xl lg:text-3xl font-black mb-2 text-text">ARAFAT MAMIA</div>
              <div className="text-xl text-secondary mb-4">WordPress Custom Theme Developer</div>
              <p className="text-text-light leading-relaxed text-sm lg:text-base">
                Specialized WordPress Developer focused on building custom themes using modern WordPress 
                technologies like theme.json, Full Site Editing, and Gutenberg blocks. I convert Figma designs 
                into responsive, high-performance WordPress websites with custom functionality. Strong expertise 
                in WooCommerce, ACF Pro, and REST API integrations. Passionate about creating optimized, 
                secure, and scalable WordPress solutions.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-secondary mb-6 relative inline-block">
                WORK EXPERIENCE
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-secondary"></div>
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="pb-6 border-b border-gray-600/50 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-text">{exp.title}</div>
                        <div className="text-secondary font-medium text-sm lg:text-base">{exp.company}</div>
                      </div>
                      <div className="bg-gradient-to-r from-secondary to-accent text-white px-3 py-1 rounded-full text-xs lg:text-sm font-semibold whitespace-nowrap sm:mt-1 shadow-lg">
                        {exp.date}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.2 + pointIndex * 0.1 }}
                          className="text-text-light pl-4 relative text-sm lg:text-base leading-relaxed"
                        >
                          <span className="absolute left-0 text-secondary text-lg">•</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specialization */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-secondary mb-4 relative inline-block">
                WORDPRESS SPECIALIZATION
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-secondary"></div>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-secondary/30 text-center">
                  <div className="text-secondary text-lg font-bold mb-2">Custom Themes</div>
                  <div className="text-text-light text-sm">Figma to WordPress conversion using theme.json & FSE</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-secondary/30 text-center">
                  <div className="text-secondary text-lg font-bold mb-2">WooCommerce</div>
                  <div className="text-text-light text-sm">E-commerce solutions with custom functionality</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-secondary/30 text-center">
                  <div className="text-secondary text-lg font-bold mb-2">Plugin Development</div>
                  <div className="text-text-light text-sm">Custom functionality & API integrations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <button 
            onClick={handleDownloadCV}
            className="btn bg-gradient-to-r from-secondary to-accent border-0 hover:from-accent hover:to-secondary transition-all duration-300"
          >
            <i className="fas fa-download mr-2"></i>
            Download WordPress CV
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className="btn btn-outline border-secondary text-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300"
          >
            Hire Me for WordPress Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}