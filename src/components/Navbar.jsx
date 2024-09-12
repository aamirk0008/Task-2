import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex my-16 bg-blue-100 ml-16 py-4 w-[50%] rounded-[50px] justify-center'>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/">Blog Home</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/marketing">Marketing</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="#">SEO</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="#">PPC</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="#">Social Media</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="#">Web Design</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="#">Internet</a></li>
        </ul>
    </div>
  )
}

export default Navbar
