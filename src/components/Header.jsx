import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiHeart } from 'react-icons/fi'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'O Casal' },
    { path: '/a-cerimonia', label: 'A Cerimônia' },
    { path: '/confirmacao', label: 'Confirmação' },
    { path: '/lista-presentes', label: 'Lista de Presentes' },
  ]

  const isActive = (path) => location.pathname === path

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center space-x-2">
            <FiHeart className="text-wedding-rose text-2xl" />
            <span className="text-2xl font-serif font-bold text-wedding-olive">
              Nosso Casamento
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-wedding-olive border-b-2 border-wedding-olive'
                    : 'text-gray-600 hover:text-wedding-olive'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-wedding-olive text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-wedding-olive font-semibold'
                    : 'text-gray-600 hover:text-wedding-olive'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
