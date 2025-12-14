import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MENU_ITEMS } from '../../utils/constants'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`navbar-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
