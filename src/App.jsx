import './assets/styles/reset.css'
import './App.css'
import { RouteView } from './components/RouteView'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App () {
  return (
    <div>
      <Header/>
      <RouteView/>
      <Footer/>
    </div>
  )
}

export default App
