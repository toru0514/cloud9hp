import './HamburgerMenu.css'
import { Link } from './Link'

export const HamburgerMenu = ({ expanded, children }) => {
  const rootClassNames = expanded ? 'HamburgerMenu HamburgerMenu-expanded' : 'HamburgerMenu'

  return (
    <nav className={rootClassNames}>
      <ul className="HamburgerMenu_list">
        {children}
      </ul>
    </nav>
  )
}

const Item = ({ children, to }) => {
  return (
    <li className="HamburgerMenu_item">
      <Link to={to}>{children}</Link>
    </li>
  )
}
HamburgerMenu.Item = Item