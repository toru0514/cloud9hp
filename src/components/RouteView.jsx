import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Support from '../pages/Support'
import Contact from '../pages/Contact'

export const RouteView = () => (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
)