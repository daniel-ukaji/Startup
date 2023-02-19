import React from 'react'

function Header() {
  return (
    <header className='bg-gradient-to-r from-white to-[#E3F8FF]'>
        <div className='flex justify-between max-w-6xl mx-auto pt-5 pb-3'>
            <div>
                <p className='font-bold'>Upstart.com</p>
            </div>
            <div className='space-x-7 text-gray-600'>
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Services</a>
                <a href="">Customer</a>
                <a href="">Pricing</a>
            </div>
            <div className='space-x-5'>
                <a href="#" className='border pt-2 pb-2 pl-6 pr-6 rounded cursor-pointer bg-white'>Seller</a>
                <a href="#" className='border pt-2 pb-2 pl-6 pr-6 rounded cursor-pointer bg-[#004385] text-white'>Investors</a>
            </div>
        </div>
    </header>
  )
}

export default Header