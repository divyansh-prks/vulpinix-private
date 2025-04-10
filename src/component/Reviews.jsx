import React from 'react'

const Reviews = () => {
  return (
    <div className='p-10 text-white bg-black'>
        <div>
            <h1 className='text-6xl'>Reviews</h1>
        </div>
        <div className='flex space-x-1.5 mt-15' >
        <div className='w-100 ml-50 h-100  bg-gradient-to-br from-bg-[#050c2e]  to-blue-500 flex  border-3 border-white shadow-[0_0_15px_rgba(255,0,150,20)] flex-col rounded-4xl'>
            <img src="src/assets/profile.png" className='h-60 w-90' alt="" />
            <h1 className='text-3xl pl-12  text-white'>Mark</h1>
            <p className='pl-12 p-4'>I love the product , I am using this from last couple of year.</p>


        </div>

        <div className='w-100 ml-50 h-100  bg-gradient-to-br from-bg-[#050c2e]  to-blue-500 flex  border-3 border-white shadow-[0_0_15px_rgba(255,0,150,20)] flex-col rounded-4xl'>
            <img src="src/assets/profile.png" className='h-60 w-90' alt="" />
            <h1 className='text-3xl pl-12  text-white'>Jack</h1>
            <p className='pl-12 p-4'>I love the product , I am using this from last couple of year.</p>


        </div>

        <div className='w-100 ml-50 h-100  bg-gradient-to-br from-bg-[#050c2e]  to-blue-500 flex  border-3 border-white shadow-[0_0_15px_rgba(255,0,150,20)] flex-col rounded-4xl'>
            <img src="src/assets/profile.png" className='h-60 w-90' alt="" />
            <h1 className='text-3xl pl-12  text-white'>Luci</h1>
            <p className='pl-12 p-4'>I love the product , I am using this from last couple of year.</p>


        </div>
       

        </div>


    </div>
  )
}

export default Reviews