import React from 'react'
import './Product.css'

import purpleheartImage from '../assets/images/purpleheart.png'

class ProductPage extends React.Component {
  render () {
    return (
      <div className="product-page">
        <div className="product-title-area">
          <p className="title-en">PRODUCTS</p>
          <p className="title-jp">製品紹介</p>
          <br/>
          <p className="product-ring">Wood Ring</p>
          <p>貴重な木材を使用するオリジナルのウッドリング。</p>
          <br/>
        </div>
        <br/>
        <div className="purpleheart-area">
          <div className="image-area">
            <img className="image"
                 src={purpleheartImage}
                 alt="パープルハート写真"/>
          </div>
          <div className="description-area">
            <h2>
              <span className="product-title">cloud9 WoodRing PURPLEHEART</span>
              <br/>
              <span className="product-title">cloud9 ウッドリング パープルハート</span>
            </h2>
            <br/>
            <span>「信頼」や「確実性」の意味をともなうパープルカラーの指輪。手にパープルを取り入れるだけでいつもより大人な雰囲気に包まれます。</span>
            <br/><br/>
            <p className="read-test">READ MORE</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductPage