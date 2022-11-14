import './App.css'
import padauk from './images/padauk.jpeg'
import rosewood from './images/rosewood.jpeg'
import wenge from './images/wenge.jpeg'
import maple from './images/maple.jpeg'
import snakewood from './images/snakewood.jpeg'
import pinkivory from './images/pinkivory.jpeg'
import karin from './images/karin.jpeg'
import satine from './images/satine.jpeg'
import purpleheart from './images/purpleheart.jpeg'
import cloud9 from './images/cloud9.jpeg'

const padaukUrl = "https://www.creema.jp/item/14942878/detail"
const rosewoodUrl = "https://www.creema.jp/item/14942931/detail"
const wengeUrl = "https://www.creema.jp/item/14943033/detail"
const mapleUrl = "https://www.creema.jp/item/14943075/detail"
const snakewoodUrl = "https://www.creema.jp/item/14943228/detail"
const pinkivoryUrl = "https://www.creema.jp/item/14943315/detail"
const karinUrl = "https://www.creema.jp/item/14943464/detail"
const satineUrl = "https://www.creema.jp/item/14943485/detail"
const purpleheartUrl = "https://www.creema.jp/item/14943547/detail"
const cloud9Url = "https://www.creema.jp/creator/7614629/item/onsale"

  function App () {
  const openUrlTab = (url) =>{
    window.open(url)
  }
  return (
    <div className="App">
      <h1>木材工房cloud9(構築中…)</h1>
      <p>画像をクリック!</p>
    <img className='cloud9-image'
         src={cloud9}
         alt="cloud9写真"
         onClick={()=>openUrlTab(cloud9Url)}
    />
      <br />
      <img className='purpleheart-image'
           src={purpleheart}
           alt="パープルハート写真"
           onClick={()=>openUrlTab(purpleheartUrl)}/>
      <img className='satine-image'
           src={satine}
           alt="サティーネ写真"
           onClick={()=>openUrlTab(satineUrl)}/>
      <img className='karin-image'
           src={karin}
           alt="花梨写真"
           onClick={()=>openUrlTab(karinUrl)}/>
      <br />
      <img className='pinkivory-image'
           src={pinkivory}
           alt="ピンクアイボリー写真"
           onClick={()=>openUrlTab(pinkivoryUrl)}/>
      <img className='snakewood-image'
           src={snakewood}
           alt="スネークウッド写真"
           onClick={()=>openUrlTab(snakewoodUrl)}/>
      <img className='maple-image'
           src={maple}
           alt="メープル写真"
           onClick={()=>openUrlTab(mapleUrl)}/>
      <br />
      <img className='wenge-image'
           src={wenge}
           alt="ウェンジ写真"
           onClick={()=>openUrlTab(wengeUrl)}/>
      <img className='rosewood-image'
           src={rosewood}
           alt="ローズウッド写真"
           onClick={()=>openUrlTab(rosewoodUrl)}/>
      <img className='padauk-image'
           src={padauk}
           alt="パドック写真"
           onClick={()=>openUrlTab(padaukUrl)}/>
      <br />
      <div className="container">
        <h1>お問い合わせ</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div>
            <label htmlFor="name">お名前（必須）</label>
            <input name="name" type="text" required/>
          </div>
          <div>
            <label htmlFor="email">メールアドレス（必須）</label>
            <input name="email" type="email" required/>
          </div>
          <div>
            <label htmlFor="content">お問い合わせ内容</label>
            <textarea
              name="content"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit">送信する</button>
        </form>
      </div>
    </div>
  )
}

export default App
