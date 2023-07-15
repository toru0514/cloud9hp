import React from 'react'
import styles from './index.module.css'
import { gallaryCrystal, products, shop } from '../data'
import classNames from 'classnames/bind'
/**/
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
        <div className={cx('home-about-area')}>
          <div className={cx('home-title')}>
            <p>〜 木のアクセサリーから <br/> 木パネルの制作相談等 〜</p>
          </div>
          <div className={cx('home-about-title')}>
            <p>- 『cloud9(クラウドナイン)』とは -</p>
          </div>
          <div className={cx('home-aboutus')}>
            <p>「I’m on cloud9!!」という風に使われ、<br/>
              「意気揚々」「最高の幸せ」「至福」<br/>
              という意味があります。<br/><br/>

              我々が提供する商品で、<br/>
              「cloud9な気持ちになっていただきたい」
              という想いを込めたブランドです。<br/><br/>

              木材を使用した指輪/ネックレス等の<br/>
              アクセサリーを始め、パネル制作等、<br/>
              木の加工相談も承っております。</p>
          </div>
          <div className={cx('view-area')}>
            <a className={cx('view-more')}
               href="/aboutus"
               target="_self"
               rel="noreferrer"
            >ABOUT US</a>
          </div>
          <div className={cx('home-product-area')}>
            <p>-PRODUCT-</p>
          </div>
          <div className={cx('product-title')}>
            <p>Wood Ring</p>
          </div>
          <div className={cx('product-us')}>
            <p>希少な木材を使用する<br/>
              オリジナルのウッドリング。<br/>
              艶出し剤を使わず、輝くまで磨き上げました。</p>
          </div>
        </div>
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
      <div className={cx('product-title')}>
        <p>Crystal & Wood Ring</p>
      </div>
      <div className={cx('product-us')}>
        <p>ウッドリングにクリスタルを埋め込み、<br/>
          「手元に輝きを着けたい」<br/>
          そんな、あなたのための指輪です。</p>
      </div>
      <div className={cx('gallery')}>
        {
          gallaryCrystal.map((crystal) => (
            <a
              key={crystal.id}
              href={crystal.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={cx('image')}
                src={crystal.image}
                alt={crystal.name}/>
            </a>
          ))
        }
      </div>
      <div className={cx('view-area')}>
        <a className={cx('view-more')}
           href="/product"
           target="_self"
           rel="noreferrer"
        >VIEW MORE</a>
      </div>
    </div>
  )
}

export default HomePage