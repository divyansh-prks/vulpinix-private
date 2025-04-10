

import './App.css'
import Compaign from './component/Compaign'
import Contact from './component/Contact'
import Features from './component/Features'
import "./component/Hero"
import Hero from './component/Hero'
import Meet from './component/Meet'
import NewFeatures from './component/NewFeatures'
import Reviews from './component/Reviews'

// import { Hero } from './component/Hero'

function App() {

  return (
    
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Hero />
    {/* <Hero /> */}
    <Compaign />
    <Features />
    <NewFeatures />
    <Reviews />
    <Meet />
    <Contact />
    
    

    </div>
  
  )
}

export default App
