import styles from './HamburgerButton.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const HamburgerButton = ({ onClick, expanded }) => {
  const rootClassNames = cx('HamburgerButton', { 'HamburgerButton-expanded': expanded })

  return (
    <button
      className={rootClassNames}
      onClick={onClick}
    >
      <span className={cx('HamburgerButton_line')}/>
      <span className={cx('HamburgerButton_line')}/>
      <span className={cx('HamburgerButton_line')}/>
    </button>
  )
}