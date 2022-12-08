import './assets/styles/reset.css'
import './App.css'
import { RouteView } from './components/RouteView'
import { FooterMenu } from './components/FooterMenu'
import { SNSLinks } from './components/SNSLinks'
import { Copyright } from './components/Copyright'
import { Header } from './components/Header'

function App () {
  return (
    <div>
      <Header/>
      <RouteView/>
      <FooterMenu>
        <FooterMenu.Item to="/">Home</FooterMenu.Item>
        <FooterMenu.Item to="/product">Product</FooterMenu.Item>
        <FooterMenu.Item to="/support">Support</FooterMenu.Item>
        <FooterMenu.Item to="/contact">Contact</FooterMenu.Item>
      </FooterMenu>
      <SNSLinks/>
      <Copyright/>
    </div>
  )
}

export default App
