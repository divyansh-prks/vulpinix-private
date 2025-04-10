import React from 'react'

const NewFeatures = () => {
  return (
    <div className='flex p-10 bg-gradient-to-bl from-[#040c1e] via-black to-[#03326e] bg-black'>
        <div>
            <h1 className='text-7xl text-white'>Features</h1>
        </div>
        <div className='h-150 p-10 w-300 text-white ml-100 border-4 text-4xl border-amber-50'>
            <img src="src/assets/profile.png" alt="" />
            <h3>User Friendly</h3>
            <img className='ml-11 m-3' src="src/assets/setting.png" alt="" />


            <h3>Seamless Integration</h3>
            <img className='ml-12 m-3' src="src/assets/secure.png" alt="" />


            <h3>Security & safe </h3>

        </div>
    </div>
  )
}

export default NewFeatures