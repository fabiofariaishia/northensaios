import './Button.css'

function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon = null,
  ...props
}) {
  const className = `btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${disabled ? 'btn-disabled' : ''}`

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
