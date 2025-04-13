

import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './component/AuthPage'
import Compaign from './component/Compaign'
import Contact from './component/Contact'
import Features from './component/Features'
import "./component/Hero"
import Hero from './component/Hero'
import Meet from './component/Meet'
import NewFeatures from './component/NewFeatures'
import Reviews from './component/Reviews'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Dashboard from './component/Dashboard'

// import { Hero } from './component/Hero'

function App() {

  return (

    <Routes >

      <Route 
      path='/'
      element={
        <>
        <Hero />
        <Compaign />
        <Features />
        <NewFeatures />
        <Reviews />
        <Meet />
        <Contact />
        </>
      
      }
      />

<Route path="/login*" element={<SignIn />} />
<Route
  path="/signup"
  element={
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <SignUp />
    </div>
  }
/>

<Route
  path="/dashboard"
  element={
      <Dashboard />
  }
/>



    
    
    

    </Routes>
  
  
  )
}

export default App
