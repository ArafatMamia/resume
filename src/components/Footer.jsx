// src/components/Footer.jsx
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/ArafatMamia' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/arafat-mamia-2779a3312/' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fas fa-globe', url: 'arafatportfolio321.netlify.app' },
  ]

  return (
    <footer className="bg-dark border-t border-white/20 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          {/* Left - Name */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <span className="font-bold text-text text-lg sm:text-xl">Arafat Mamia</span>
          </div>
          
          {/* Middle - Copyright */}
          <div className="flex-1 flex justify-center">
            <span className="text-text-light text-sm sm:text-base text-center">
              © 2025 Arafat Mamia. Crafted with passion and code.
            </span>
          </div>
          
          {/* Right - Social links */}
          <div className="flex-1 flex justify-center lg:justify-end space-x-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ scale: 1.1, y: -2 }}
                className="size-9 glass rounded-full flex justify-center items-center transition-all duration-400 hover:bg-secondary hover:text-white border border-gray-600/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}