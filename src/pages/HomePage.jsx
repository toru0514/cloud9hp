import { ProductGallery } from '../components/ProductGallery'
import { ShopImage } from '../components/ShopImage'

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ShopImage/>
      <ProductGallery/>
    </div>
  )
}

export default HomePage