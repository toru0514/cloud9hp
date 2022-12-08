import './assets/styles/reset.css'
import './App.css'
import { useState } from 'react'
import { links } from './data'
import { Link } from './components/Link'
import { RouteView } from './components/RouteView'
import { HamburgerButton } from './components/HamburgerButton'
import { HamburgerMenu } from './components/HamburgerMenu'
import { FooterMenu } from './components/FooterMenu'

function App () {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <header className="header">
        <h1 className="title">木材工房cloud9(構築中…)</h1>
        <HamburgerButton onClick={() => setIsExpanded(!isExpanded)} expanded={isExpanded}/>
        <HamburgerMenu expanded={isExpanded}>
          <HamburgerMenu.Item to="/">Home</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/product">Product</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/support">Support</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/contact">Contact</HamburgerMenu.Item>
        </HamburgerMenu>
      </header>
      <RouteView/>
      <FooterMenu>
        <FooterMenu.Item to="/">Home</FooterMenu.Item>
        <FooterMenu.Item to="/product">Product</FooterMenu.Item>
        <FooterMenu.Item to="/support">Support</FooterMenu.Item>
        <FooterMenu.Item to="/contact">Contact</FooterMenu.Item>
      </FooterMenu>
      <div className="link-menu">
        {links.map((link) => (
          <Link key={link.id} to={link.url} external>
            <img
              className={`icon-image ${link.id}-image`}
              src={link.image}
              alt={link.name}/>
          </Link>
        ))}
        <br/><br/>
        <p>https://cloud9woodwork.com</p>
        <br/>
      </div>
    </div>
  )
}

export default App
