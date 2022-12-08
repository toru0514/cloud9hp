import './ProductGallery.css'
import { products } from '../data'
import { Link } from './Link'

export const ProductGallery = () => {
  return (
    <div className="ProductGallery">
      {
        products.map((product) => (
          <Link
            key={product.id}
            to={product.url}
            external
          >
            <img
              className="ProductGallery_image"
              src={product.image}
              alt={product.name}/>
          </Link>
        ))
      }
    </div>
  )
}