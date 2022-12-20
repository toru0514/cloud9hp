import { HamburgerButton } from '../components/HamburgerButton'
import { HamburgerMenu } from '../components/HamburgerMenu'
import { Link } from '../components/Link'
import { links } from '../data'
import '../assets/styles/reset.css'
import './_app.css'
import { useState } from 'react'

export default function MyApp ({ Component, pageProps }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <header className="header">
        <h1 className="title">木材工房cloud9 (構築中…)</h1>
        <HamburgerButton onClick={() => setIsExpanded(!isExpanded)} expanded={isExpanded}/>
        <HamburgerMenu expanded={isExpanded}>
          <HamburgerMenu.Item to="/">Home</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/product">Product</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/support">Support</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/contact">Contact</HamburgerMenu.Item>
        </HamburgerMenu>
      </header>
      <Component {...pageProps} />
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
    </>
  )
}