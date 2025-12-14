import './Hero.css'

function Hero({ title, subtitle, image, height = 'medium' }) {
  return (
    <div className={`hero hero-${height}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
