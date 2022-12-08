import Home from './pages/HomePage'
import Product from './pages/ProductPage'
import Support from './pages/SupportPage'
import Contact from './pages/ContactPage'

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    element: <Home/>,
  },
  {
    name: 'Product',
    path: '/product',
    element: <Product/>
  },
  {
    name: 'Support',
    path: '/support',
    element: <Support/>
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact/>
  }
]