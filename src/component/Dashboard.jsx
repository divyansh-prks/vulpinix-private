import { SignOutButton } from '@clerk/clerk-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div >

        <div className='flex items-center justify-center flex-col mt-48'>

        <h1>
            Logged Into Vulpinix SuccessFully ✅
            
            </h1>
        
           <button className='bg-black text-amber-50 p-3 mt-4 cursor-pointer'>
            <SignOutButton />
            
            </button> 
        </div>
        
        
         </div>

  )
}

export default Dashboard