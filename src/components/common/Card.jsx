import './Card.css'

function Card({ children, className = '', onClick, hoverable = true }) {
  const cardClassName = `card ${hoverable ? 'card-hoverable' : ''} ${className}`

  return (
    <div className={cardClassName} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
