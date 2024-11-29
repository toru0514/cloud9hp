import { HamburgerButton } from '../components/HamburgerButton'
import { HamburgerMenu } from '../components/HamburgerMenu'
import { Link } from '../components/Link'
import { links } from '../data'
import '../assets/styles/reset.css'
import './_app.css'
import { useState } from 'react'
import Head from 'next/head'

export default function MyApp ({ Component, pageProps }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="木材工房cloud9です。希少な木材を使用した高級アクセサリーを製作しているブランドです。"
        />
        <meta name="facebook-domain-verification" content="your-code-here"/>
        {'52k87tv0bp82w7htgc6v0g57lbjsct'}
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <title>木材工房cloud9</title>
      </Head>
      <header className="header">
        <h1 className="title">木材工房cloud9</h1>
        <HamburgerButton onClick={() => setIsExpanded(!isExpanded)} expanded={isExpanded}/>
        <HamburgerMenu expanded={isExpanded}>
          <HamburgerMenu.Item to="/">Home</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/product">Product</HamburgerMenu.Item>
          <HamburgerMenu.Item to="/aboutus">AboutUs</HamburgerMenu.Item>
          {/*<HamburgerMenu.Item to="/support">Support</HamburgerMenu.Item>*/}
          <HamburgerMenu.Item to="/contact">Contact</HamburgerMenu.Item>
        </HamburgerMenu>
      </header>
      <Component {...pageProps} />
      <div className="under-line1"/>
      <div className="menu-area">
        <p className="border-lineno"><Link to="/">Home</Link></p>
        <p className="border-line"><Link to="/product">Product</Link></p>
        <p className="border-line"><Link to="/aboutus">AboutUs</Link></p>
        {/*<p className="border-line"><Link to="/support">Support</Link></p>*/}
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
        <p>&copy;{new Date().getFullYear()} 木材工房cloud9</p>
        <br/>
      </div>
    </>
  )
}
