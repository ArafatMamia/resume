// src/App.jsx
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(true) // Start with sidebar open

  const navigateTo = (page) => {
    setActivePage(page)
    if (window.innerWidth <= 768) {
      setSidebarOpen(false) // Auto-close on mobile after navigation
    }
  }

  return (
    <div className="min-h-screen bg-darker text-text">
      <Sidebar 
        activePage={activePage} 
        navigateTo={navigateTo}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main className={`min-h-screen transition-all duration-400 ${
        sidebarOpen ? 'md:ml-72' : 'ml-0'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4sm:px-6 py-8">
          {activePage === 'home' && <Home navigateTo={navigateTo} />}
          {activePage === 'about' && <About navigateTo={navigateTo} />}
          {activePage === 'resume' && <Resume navigateTo={navigateTo} />}
          {activePage === 'projects' && <Projects navigateTo={navigateTo} />}
          {activePage === 'contact' && <Contact />}
        </div>
        
        <Footer />
      </main>
    </div>
  )
}

export default App