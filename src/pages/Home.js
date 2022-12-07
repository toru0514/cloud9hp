import React from 'react'
import './Home.css'
import { products, shop } from '../data'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <div className="App">
          <p>画像をクリック!</p>
          <a href={shop.url} target="_blank">
            <img
              className="image"
              src={shop.image}
              alt="cloud9写真"
            />
          </a>
          <br/>
          <div className="gallery">
            {
              products.map((product) => (
                <a
                  key={product.id}
                  href={product.url}
                  target="_blank"
                >
                  <img
                    className="image"
                    src={product.image}
                    alt={product.name}/>
                </a>
              ))
            }
          </div>
        </div>
      </div>

    )
  }
}

export default HomePage