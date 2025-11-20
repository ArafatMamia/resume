
import arafatimage from '../../public/images/arafat.jpg'
// src/components/Sidebar.jsx
export default function Sidebar({ activePage, navigateTo, sidebarOpen, setSidebarOpen }) {
  const navItems = [
    { id: 'home', icon: 'fas fa-home', label: 'Home' },
    { id: 'about', icon: 'fas fa-user', label: 'About' },
    { id: 'projects', icon: 'fas fa-code', label: 'Projects' },
    { id: 'resume', icon: 'fas fa-file-alt', label: 'Resume' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/ArafatMamia' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/arafat-mamia-2779a3312/' },
    { icon: 'fab fa-wordpress', url: '#' },
    { icon: 'fas fa-globe', url: 'https://arafatmamia321.netlify.app' },
  ]

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 w-72 h-screen bg-dark/95 backdrop-blur-md border-r border-white/20 flex flex-col p-10 z-40 transition-transform duration-400 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:block`}
        style={{ display: sidebarOpen ? 'flex' : 'none' }}
      >
        {/* Hamburger Toggle INSIDE Sidebar - Top Right */}
        <button
          className="absolute top-5 right-5 size-12 bg-secondary text-white rounded-full flex justify-center items-center cursor-pointer transition-all duration-400 hover:bg-accent z-50"
          onClick={toggleSidebar}
          title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Profile Section */}
        <div className="text-center mb-10 pb-8 border-b border-white/20 mt-4">
          <div className="size-32 bg-secondary rounded-full p-1 mx-auto mb-5">
            <img
              src={arafatimage}
              alt="Arafat Mamia"
              className="size-full rounded-full object-cover border-2 border-darker"
            />
          </div>
          <h3 className="text-xl font-bold mb-1 text-text">Arafat Mamia</h3>
          <p className="text-secondary font-medium">WordPress Specialist</p>
        </div>

        {/* Navigation */}
        <ul className="mb-10 space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  navigateTo(item.id);
                  // Auto-close on mobile after navigation
                  if (window.innerWidth <= 768) {
                    setSidebarOpen(false);
                  }
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-400 font-medium glass border ${
                  activePage === item.id 
                    ? 'bg-secondary/20 text-secondary border-secondary/50' 
                    : 'border-transparent text-text hover:bg-secondary/20 hover:text-secondary'
                }`}
              >
                <i className={`${item.icon} mr-4 text-lg w-6 text-center`}></i>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="size-11 glass rounded-full flex justify-center items-center transition-all duration-400 hover:bg-secondary hover:text-white hover:-translate-y-1 border"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* External Toggle - Only show when sidebar is closed */}
      {!sidebarOpen && (
        <button
          className="fixed top-5 left-5 size-12 bg-secondary text-white rounded-full flex justify-center items-center cursor-pointer transition-all duration-400 hover:bg-accent z-50"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars"></i>
        </button>
      )}
    </>
  )
}