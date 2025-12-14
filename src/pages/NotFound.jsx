import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Página não encontrada</h2>
          <p>Desculpe, a página que você está procurando não existe.</p>
          <Link to="/" className="btn btn-primary">
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
