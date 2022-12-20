import React from 'react'
import styles from './index.module.css'
import { products, shop } from '../data'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const HomePage = () => {
  return (
    <div className="App">
      <div>
        <a
          href={shop.url}
          target="_blank"
          rel="noreferrer">
          <img
            className={cx('shop-image')}
            src={shop.image}
            alt="cloud9写真"
          />
        </a>
        <br/>
        <div className={cx('gallery')}>
          {
            products.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={cx('image')}
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

export default HomePage