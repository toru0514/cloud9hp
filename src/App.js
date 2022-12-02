import './App.css'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Product from './pages/product'
import Contact from './pages/contact'
import Support from './pages/support'
import Home from './pages/home'
import creema from './images/creema.png'
import minne from './images/minne.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const creemaUrl = "https://www.creema.jp/creator/7614629/item/onsale"
const minneUrl = "https://minne.com/@cloud9-wood"
const instagramUrl = "https://instagram.com/cloud9_woodwork?igshid=YmMyMTA2M2Y="
const twitterUrl = "https://twitter.com/cloud9_woodwork?s=21&t=bdwddBl2tEFpUtr9tMjI5w"



  function App () {
    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
      setOpen((prevState) => !prevState);
    };
    const openUrlTab = (url) =>{
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
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="link-menu">
      <img className='icon-image'
           src={creema}
           alt="creemaアイコン"
           onClick={()=>openUrlTab(creemaUrl)}/>
      <img className='icon-image'
           src={minne}
           alt="minneアイコン"
           onClick={()=>openUrlTab(minneUrl)}/>
      <img className='instagram-image'
           src={instagram}
           alt="instagramアイコン"
           onClick={()=>openUrlTab(instagramUrl)}/>
      <img className='twitter-image'
           src={twitter}
           alt="twitterアイコン"
           onClick={()=>openUrlTab(twitterUrl)}/>
      <br />
      <p>https://cloud9woodwork.com/</p>
      <br />
      </div>
    </div>
  )
}

export default App
