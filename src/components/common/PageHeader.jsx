import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import './PageHeader.css'

function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <div className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <FaChevronRight className="breadcrumb-separator" />
                {crumb.path ? (
                  <Link to={crumb.path}>{crumb.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}

export default PageHeader
