import styles from './HamburgerMenu.module.css'
import { Link } from './Link'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const HamburgerMenu = ({ expanded, children }) => {
  const rootClassNames = cx('HamburgerMenu', { 'HamburgerMenu-expanded': expanded })

  return (
    <nav className={rootClassNames}>
      <ul className={cx('HamburgerMenu_list')}>
        {children}
      </ul>
    </nav>
  )
}

const Item = ({ children, to }) => {
  return (
    <li className={cx('HamburgerMenu_item')}>
      <Link to={to}>{children}</Link>
    </li>
  )
}
HamburgerMenu.Item = Item