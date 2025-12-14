import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { COMPANY_NAME } from '../../utils/constants'
import logo from '../../assets/images/logo2.jpg'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <img src={logo} alt={`Logo ${COMPANY_NAME}`} />
            <span className="header-logo-text">{COMPANY_NAME}</span>
          </Link>

          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
