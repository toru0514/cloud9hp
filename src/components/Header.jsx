import './Header.css'
import { Title } from './Title'
import { HamburgerButton } from './HamburgerButton'
import { HamburgerMenu } from './HamburgerMenu'
import { useState } from 'react'

export const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  const handleHamburgerButtonClick = () => {
    setIsMenuExpanded(!isMenuExpanded)
  }

  return (
    <header className="Header">
      <Title>木材工房cloud9(構築中…)</Title>
      <HamburgerButton
        onClick={handleHamburgerButtonClick}
        expanded={isMenuExpanded}
      />
      <HamburgerMenu expanded={isMenuExpanded}>
        <HamburgerMenu.Item to="/">Home</HamburgerMenu.Item>
        <HamburgerMenu.Item to="/product">Product</HamburgerMenu.Item>
        <HamburgerMenu.Item to="/support">Support</HamburgerMenu.Item>
        <HamburgerMenu.Item to="/contact">Contact</HamburgerMenu.Item>
      </HamburgerMenu>
    </header>
  )
}