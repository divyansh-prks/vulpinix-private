import React from 'react'

const Compaign = () => {
  return (
    <div className='bg-[#040c1e] flex space-x-100 p-30'>
{/* bg-gradient-to-bl from-bg-[#040c1e] to-blue-900 */}
        <div className='w-100 ml-50 h-100  bg-gradient-to-br from-bg-[#050c2e]  to-blue-500 flex items-center border-3 border-white shadow-[0_0_15px_rgba(255,0,150,20)]  justify-center rounded-4xl'>
            <h1 className='text-6xl p-10  text-white'>Whatsapp Compaign</h1>


        </div>

        <div className='w-100  h-100  bg-gradient-to-br from-bg-[#050c2e]  to-blue-500 flex items-center border-3 border-white shadow-[0_0_15px_rgba(255,0,150,20)]  justify-center rounded-4xl'>
            <h1 className='text-6xl p-10 text-white'>Lead Compaign</h1>
            <h1 className='text-white'>...</h1>


        </div>

    </div>
  )
}

export default Compaign;