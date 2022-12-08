import './assets/styles/reset.css'
import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Support from './pages/Support'
import Home from './pages/Home'
import { links } from './data'

function App () {
  const [open, setOpen] = useState(false)
  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <div>
      <header className="header">
        <h1 className="title">木材工房cloud9(構築中…)</h1>
        <button
          className="toggleButton"
          type="button"
          aria-controls="navigation"
          aria-expanded={open}
          aria-label="メニューを開きます"
          onClick={toggleFunction}
        >
          <span className="line-1"/>
          <span className="line-2"/>
          <span className="line-3"/>
        </button>
        <nav id="navigation" aria-hidden={!open} className="navigation">
          <ul className="">
            <li><a href="/">Home</a></li>
            <li><a href="/Product.jsx">Product</a></li>
            <li><a href="/Support.jsx">Support</a></li>
            <li><a href="/Contact.jsx">Contact</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <div className="under-line1"/>
      <div className="menu-area">
        <p className="border-lineno"><a href="/">Home</a></p>
        <p className="border-line"><a href="/Product.jsx">Product</a></p>
        <p className="border-line"><a href="/Support.jsx">Support</a></p>
        <p className="border-line"><a href="/Contact.jsx">Contact</a></p>
      </div>
      <div className="under-line1"/>
      <div className="link-menu">
        {links.map((link) => (
          <a href={link.url} target="_blank" rel="noreferrer">
            <img
              key={link.id}
              className={`icon-image ${link.id}-image`}
              src={link.image}
              alt={link.name}/>
          </a>
        ))}
        <br/><br/>
        <p>https://cloud9woodwork.com</p>
        <br/>
      </div>
    </div>
  )
}

export default App