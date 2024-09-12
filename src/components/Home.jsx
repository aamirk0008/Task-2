import React from 'react'

const Home = () => {
  return (
    <div className='mx-16 mt-24'>
      <h1 className='text-6xl flex font-bold'>Smart marketing starts Here <span className='relative top-8 left-3 w-[100px]'><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/masthead/orange-arrow.png" alt="" /></span></h1>
      <div className='flex mt-12'>
        <h3 className='text-xl w-[50%]'>Join over 200,000 marketing managers, and get the best digital marketing insights, strategies, and tips delivered straight to your inbox!</h3>
            <div className='flex gap-4'>
                <input className='w-[350px] h-[80px] outline rounded-md px-4 py-2' type="email" name="email" id="email" placeholder='Enter your email'/>
                <button className='bg-blue-700 px-24 text-xl rounded-md text-white'>Subscribe</button>
            </div>

      </div>
    </div>
  )
}

export default Home
