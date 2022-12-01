import './App.css'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Product from './pages/product'
import Contact from './pages/contact'
import Support from './pages/support'
import Home from './pages/home'



  function App () {
    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
      setOpen((prevState) => !prevState);
    };

  return (
    <div>
    <header className="header">
      <button
        type="button"
        aria-controls="navigation"
        aria-expanded={open}
        aria-label="メニューを開きます"
        onClick={toggleFunction}
        className="toggleButton"
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
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
