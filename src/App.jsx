import './assets/styles/reset.css'
import './App.css'
import { useState } from 'react'
import { links } from './data'
import { Link } from './components/Link'
import { RouteView } from './components/RouteView'
import { HamburgerButton } from './components/HamburgerButton'
import { HamburgerMenu } from './components/HamburgerMenu'

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
      <div className="under-line1"/>
      <div className="menu-area">
        <p className="border-lineno"><Link to="/">Home</Link></p>
        <p className="border-line"><Link to="/product">Product</Link></p>
        <p className="border-line"><Link to="/support">Support</Link></p>
        <p className="border-line"><Link to="/contact">Contact</Link></p>
      </div>
      <div className="under-line1"/>
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
