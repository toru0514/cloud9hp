import React from 'react'
import './Product.css'
import { products } from '../data'

class ProductPage extends React.Component {
  render () {
    return (
      <div className="product-page">
        <div className="product-title-area">
          <p className="title-en">PRODUCTS</p>
          <p className="title-jp">製品紹介</p>
          <br/>
          <p className="product-ring">Wood Ring</p>
          <p>希少な木材を使用するオリジナルのウッドリング。</p>
          <br/>
        </div>
        <br/>
        <div className="ring-repertory-area">
          {
            products.map((product) => (
              <>
                <div className="image-area">
                  <img className="image"
                       src={product.image}
                       alt={product.name}/>
                </div>
                <div className="description-area">
                  <h2>
                    <span className="product-title">{product.enName}</span>
                    <br/>
                    <span className="product-title">{product.jpName}</span>
                  </h2>
                  <br/>
                  <span>{product.intro}</span>
                  <br/><br/>
                  <p className="read-text">READ MORE</p>
                </div>
              </>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ProductPage