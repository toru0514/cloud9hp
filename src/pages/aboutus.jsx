import React from 'react'
import styles from './aboutus.module.css'
import classNames from 'classnames/bind'
import { shop } from '../data'

const cx = classNames.bind(styles)

const AboutusPage = () => (
  <div className={cx('aboutus-page')}>
    <div className={cx('home-aboutus-area')}>
      <p>-ABOUT US-</p>
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
    </div>
    <div className={cx('home-about-title')}>
      <p>- 『cloud9(クラウドナイン)』とは -</p>
    </div>
    <div className={cx('home-aboutus')}>
      <p>「I’m on cloud9!!」という風に使われ、<br/>
        「意気揚々」「最高の幸せ」「至福」<br/>
        という意味があります。<br/><br/>

        我々が提供する商品で、<br/>
        「cloud9な気持ちになっていただきたい」<br/>
        という想いを込めたブランドです。<br/><br/>

        木材を使用した指輪/ネックレス等の<br/>
        アクセサリーを始め、パネル制作等、<br/>
        木の加工相談も承っております。</p>
    </div>
    <div className={cx('home-about-title')}>
      <p>- ロゴに込められた想い -</p>
    </div>
    <div className={cx('home-aboutus')}>
      <p>ロゴにある赤い風船は、気持ちを表しています。<br/>
        風船は常に上に上がり、風に乗って浮遊します。<br/><br/>

        周りを漂う雲は９番目の雲、「cloud9」です。<br/><br/>

        商品、サービスで膨らみ、漂う風船を<br/>
        割ることなく「cloud9」の領域まで案内する。<br/>
        それが我々木材工房cloud9の使命です。</p>
    </div>
    <div className={cx('view-area')}>
      <a className={cx('view-more')}
         href="/"
         target="_self"
         rel="noreferrer"
      >HOME PAGE</a>
    </div>
  </div>
)

export default AboutusPage