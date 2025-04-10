import React from 'react'

const Features = () => {
  return (
    <div className='flex space-x-100 bg-[#040c1e] p-20'>
        
        <div  className='w-150 ml-50 h-100 bg-gradient-to-br from-bg-[#050c2e]  to-[#bababa] flex items-center flex-wrap text-white border-3 border-white rounded-4xl p-5  justify-center '>
            <h1 className='text-5xl'> What is Finance </h1>
            <p>Highlight what sets you apart from your Competition , whether it's a special feature , a unique philosopy or awards and recognition that you have recieved . Think of this As your elevator pitch to get the reader's attention</p>

        </div>
        <div>
            <img src="src/assets/vulp2.png" width={600} className='mr-100' alt="img" />
        </div>
    </div>
  )
}

export default Features