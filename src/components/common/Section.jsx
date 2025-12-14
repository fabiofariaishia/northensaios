import './Section.css'

function Section({
  children,
  title,
  subtitle,
  className = '',
  background = 'white',
  id
}) {
  const sectionClassName = `section section-${background} ${className}`

  return (
    <section className={sectionClassName} id={id}>
      <div className="container">
        {(title || subtitle) && (
          <div className="section-title">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
