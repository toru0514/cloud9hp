import React from 'react'
import { products, shop } from '../data'

class HomePage extends React.Component {
  render () {
    const openUrlTab = (url) => {
      window.open(url)
    }
    return (
      <div>
        <div className="App">
          <p>画像をクリック!</p>
          <img className="image"
               src={shop.image}
               alt="cloud9写真"
               onClick={() => openUrlTab(shop.url)}
          />
          <br/>
          {
            products.map((product, i) => (
              <>
                <img
                  className="image"
                  src={product.image}
                  alt={product.name}
                  onClick={() => openUrlTab(product.url)}/>
                {i !== 0 && i % 3 === 2 && <br/>}
              </>
            ))
          }
        </div>
      </div>

    )
  }
}

export default HomePage