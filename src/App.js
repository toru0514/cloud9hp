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

function App () {
  const openUrlTab = () =>{
    window.open("https://www.creema.jp/creator/7614629/item/onsale")
  }
  return (
    <div className="App">
      <h1>木材工房cloud9(構築中…)</h1>
  <button>
    <img className='cloud9-image'
         src={cloud9}
         alt="cloud9写真"
         onClick={openUrlTab}
    />
  </button>
      <br />
      <img className='purpleheart-image'
           src={purpleheart} alt="パープルハート写真"/>
      <img className='satine-image'
           src={satine} alt="サティーネ写真"/>
      <img className='karin-image'
           src={karin} alt="花梨写真"/>
      <br />
      <img className='pinkivory-image'
           src={pinkivory} alt="ピンクアイボリー写真"/>
      <img className='snakewood-image'
           src={snakewood} alt="スネークウッド写真"/>
      <img className='maple-image'
           src={maple} alt="メープル写真"/>
      <br />
      <img className='wenge-image'
           src={wenge} alt="ウェンジ写真"/>
      <img className='rosewood-image'
           src={rosewood} alt="ローズウッド写真"/>
      <img className='padauk-image'
           src={padauk} alt="パドック写真"/>
      <br />


    </div>
  )
}

export default App
