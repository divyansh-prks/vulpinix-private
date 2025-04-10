import React from 'react'

function Contact() {
  return (
    <div className='flex text-white bg-gradient-to-bl from-black via-black to-yellow-700 bg-black p-12 space-x-100 pt-60 '>
        <div className='w-100 h-100 ml-30' >
            <h1 className='text-7xl'>Contact</h1>
            

        </div>
        <div >
            <h1 className='text-5xl'>Phone</h1>
            <p className='pt-2'>39939xx993</p>
            <h1 className='text-5xl pt-4'>Email</h1>
            <p className='pt-2'>connect@gmail.com</p>
            <h1 className='text-5xl pt-4'>Social</h1>
            <p className='pt-2'>Instagram</p>
            <p>twitter</p>

        </div>
    </div>
  )
}

export default Contact