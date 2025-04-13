import { SignIn, SignUp } from '@clerk/clerk-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AuthPage = () => {
  return (
    
      
      <Routes >

        <Route path='login'  element={<SignIn  />}/>
        <Route path='signup' element={<SignUp />}/>
      </Routes>

    
  )
}

export default AuthPage