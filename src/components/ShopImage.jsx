import './ShopImage.css'
import { shop } from '../data'
import { Link } from './Link'

export const ShopImage = () => {
  return (
    <Link href={shop.url} external>
      <img
        className="ShopImage"
        src={shop.image}
        alt="cloud9"
      />
    </Link>
  )
}