import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='bg-gradient-to-r from-white to-[#E3F8FF]'>
        <div className='flex justify-between max-w-6xl mx-auto pt-7 pb-3'>
            <div>
                <p className='font-bold font-Poppins'>Upstart.com</p>
            </div>
            <div className='space-x-7 text-gray-600 font-Poppins text-xs tracking-wider'>
                <a href="" className=''>Home</a>
                <Link href="NewPage">About us</Link>
                <a href="">Services</a>
                <a href="">Customer</a>
                <a href="">Pricing</a>
            </div>
            <div className='space-x-2 text-xs tracking-wider'>
                <a href="#" className='font-Poppins  pt-3 pb-3 border border-slate-300 pl-10 pr-10 rounded-lg cursor-pointer font-semibold'>Seller</a>
                <a href="#" className='font-Poppins  pt-3 pb-3 pl-10 pr-10 rounded-lg cursor-pointer bg-[#004385] text-white font-extrabold'>Investors</a>
            </div>
        </div>
    </header>
  )
}

export default Header