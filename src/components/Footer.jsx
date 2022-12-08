import { FooterMenu } from './FooterMenu'
import { SNSLinks } from './SNSLinks'
import { Copyright } from './Copyright'

export const Footer = () => {
  return (
    <footer>
      <FooterMenu>
        <FooterMenu.Item to="/">Home</FooterMenu.Item>
        <FooterMenu.Item to="/product">Product</FooterMenu.Item>
        <FooterMenu.Item to="/support">Support</FooterMenu.Item>
        <FooterMenu.Item to="/contact">Contact</FooterMenu.Item>
      </FooterMenu>
      <SNSLinks/>
      <Copyright>https://cloud9woodwork.com</Copyright>
    </footer>
  )
}