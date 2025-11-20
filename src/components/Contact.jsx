// src/components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'arafmamia001@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+251-7-10-19-38-13'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Addis Ababa, Ethiopia'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple validation
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    if (!name || !email || !message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    // Simulate form submission
    setFormStatus({ type: '', message: 'Sending your message...' })

    setTimeout(() => {
      setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
      e.target.reset()
    }, 2000)
  }

  return (
    <section className="min-h-screen ">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 backdrop-blur-md border border-gray-700/50">
              <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4">Ready to Bring Your Vision to Life?</h3>
              <p className="text-lg text-text-light mb-8">
                I'm currently available for freelance projects and full-time positions. 
                Let's discuss how we can work together to create something amazing.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 border border-gray-700/50 hover:border-secondary backdrop-blur-md"
                >
                  <div className="flex items-center">
                    <div className="size-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mr-5 shadow-lg">
                      <i className={`${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text">{item.title}</h4>
                      <p className="text-text-light">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 lg:p-8 border border-gray-700/50 backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Status */}
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center border backdrop-blur-md ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border-green-500 text-green-500' 
                      : formStatus.type === 'error'
                      ? 'bg-red-500/20 border-red-500 text-red-500'
                      : 'bg-secondary/20 border-secondary text-secondary'
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-black/30 border border-gray-600/50 rounded-xl transition-all duration-400 focus:border-secondary focus:bg-black/50 focus:-translate-y-1 focus:shadow-lg focus:shadow-secondary/30 outline-none backdrop-blur-md text-text placeholder-gray-400"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-4 bg-black/30 border border-gray-600/50 rounded-xl transition-all duration-400 focus:border-secondary focus:bg-black/50 focus:-translate-y-1 focus:shadow-lg focus:shadow-secondary/30 outline-none backdrop-blur-md text-text placeholder-gray-400"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <input
                  type="text"
                  name="projectType"
                  placeholder="Project Type"
                  className="w-full px-5 py-4 bg-black/30 border border-gray-600/50 rounded-xl transition-all duration-400 focus:border-secondary focus:bg-black/50 focus:-translate-y-1 focus:shadow-lg focus:shadow-secondary/30 outline-none backdrop-blur-md text-text placeholder-gray-400"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-5 py-4 bg-black/30 border border-gray-600/50 rounded-xl transition-all duration-400 focus:border-secondary focus:bg-black/50 focus:-translate-y-1 focus:shadow-lg focus:shadow-secondary/30 outline-none resize-vertical backdrop-blur-md text-text placeholder-gray-400"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                type="submit"
                className="btn bg-gradient-to-r from-secondary to-accent border-0 hover:from-accent hover:to-secondary transition-all duration-300 w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 text-center backdrop-blur-md border border-gray-700/50 hover:border-secondary transition-all duration-400 hover:-translate-y-1">
            <div className="size-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <i className="fas fa-clock text-2xl"></i>
            </div>
            <h4 className="font-bold text-lg text-text mb-2">Response Time</h4>
            <p className="text-text-light">Within 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 text-center backdrop-blur-md border border-gray-700/50 hover:border-secondary transition-all duration-400 hover:-translate-y-1">
            <div className="size-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <i className="fas fa-globe text-2xl"></i>
            </div>
            <h4 className="font-bold text-lg text-text mb-2">Availability</h4>
            <p className="text-text-light">Worldwide Remote</p>
          </div>

          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-2xl p-6 text-center backdrop-blur-md border border-gray-700/50 hover:border-secondary transition-all duration-400 hover:-translate-y-1">
            <div className="size-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <i className="fas fa-calendar-check text-2xl"></i>
            </div>
            <h4 className="font-bold text-lg text-text mb-2">Project Start</h4>
            <p className="text-text-light">Ready to begin</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}