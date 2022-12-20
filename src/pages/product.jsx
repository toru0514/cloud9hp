import React from 'react'
import styles from './product.module.css'
import { products } from '../data'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ProductPage = () => (
  <>
    <div className={cx('product-page')}>
      <div className={cx('product-title-area')}>
        <p className={cx('title-en')}>PRODUCTS</p>
        <p className={cx('title-jp')}>製品紹介</p>
        <br/>
        <p>Wood Ring</p>
        <p>希少な木材を使用するオリジナルのウッドリング。</p>
        <br/>
      </div>
      <br/>
      <div className={cx('ring-repertory-area')}>
        {
          products.map((product) => (
            <>
              <div className={cx('image-area')}>
                <img className={cx('image')}
                     src={product.image}
                     alt={product.name}/>
              </div>
              <div className={cx('description-area')}>
                <h2 className={cx('title')}>
                  <span className={cx('product-title', 'serif')}>{product.enName}</span>
                  <br/>
                  <span className={cx('product-title', 'serif')}>{product.jpName}</span>
                </h2>
                <br/>
                <span className={cx('serif')}>{product.intro}</span>
                <br/><br/>
                <a
                  className={cx('read-text')}
                  key={product.id}
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                >READ MORE</a>
              </div>
            </>
          ))
        }
      </div>
    </div>
  </>
)

export default ProductPage