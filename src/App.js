import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/product'
import Contact from './pages/contact'
import Support from './pages/support'
import Home from './pages/home'
import { links } from './data'

function App () {
  const [open, setOpen] = useState(false)
  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }
  const openUrlTab = (url) => {
    window.open(url)
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
            <li><a href="/product">Product</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <div className="link-menu">
        {links.map((link) => (
          <img
            key={link.id}
            className={`icon-image ${link.id}-image`}
            src={link.image}
            alt={link.name}
            onClick={() => openUrlTab(link.url)}/>
        ))}
        <br/>
        <p>https://cloud9woodwork.com/</p>
        <br/>
      </div>
    </div>
  )
}

export default App
