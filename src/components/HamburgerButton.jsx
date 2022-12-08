import './HamburgerButton.css'

export const HamburgerButton = ({ onClick, expanded }) => {
  const rootClassNames = expanded ? 'HamburgerButton HamburgerButton-expanded' : 'HamburgerButton'

  return (
    <button
      className={rootClassNames}
      onClick={onClick}
    >
      <span className="HamburgerButton_line"/>
      <span className="HamburgerButton_line"/>
      <span className="HamburgerButton_line"/>
    </button>
  )
}