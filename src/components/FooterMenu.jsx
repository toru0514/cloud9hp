import './FooterMenu.css'
import { Link } from './Link'

export const FooterMenu = ({ children }) => {
  return (
    <nav className="FooterMenu">
      <ul className="FooterMenu_list">
        {children}
      </ul>
    </nav>
  )
}

const Item = ({ to, children }) => {
  return (
    <li className="FooterMenu_item">
      <Link to={to}>{children}</Link>
    </li>
  )
}
FooterMenu.Item = Item