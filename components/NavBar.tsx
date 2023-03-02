import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
    const [open, setOpen] = useState(false);
  return (
    <header className='bg-gradient-to-r from-white to-[#E3F8FF]'>
        <div className='pt-7 md:relative ml-10 md:flex md:justify-between md:items-center md:max-w-6xl md:mx-auto md:pt-7 md:pb-3'>
            <div className="flex justify-between items-center mb-5 md:mb-0">
                <p className='font-bold font-Poppins'>Upstart.com</p>
                <div onClick={() => setOpen(!open)}>
                    <AiOutlineMenu  className='cursor-pointer md:hidden text-3xl mr-5' />
                </div>
            </div>
            
                <div className={` ${open ? "block" : "hidden"} md:block flex flex-col  space-y-3 md:space-y-0 md:flex-row md:justify-center md:items-center md:space-x-7 md:text-gray-600 md:font-Poppins md:text-xs md:tracking-wider`}>
                    <a href="" className=''>Home</a>
                    <Link href="NewPage">About us</Link>
                    <a href="">Services</a>
                    <a href="">Customer</a>
                    <a href="">Pricing</a>
                </div>
                <div className='hidden mt-10 md:mt-0 md:flex md:justify-center md:items-center space-x-2 text-xs tracking-wider'>
                    <a href="#" className='font-Poppins  pt-3 pb-3 border border-slate-300 pl-10 pr-10 rounded-lg cursor-pointer font-semibold'>Seller</a>
                    <a href="#" className='font-Poppins  pt-3 pb-3 pl-10 pr-10 rounded-lg cursor-pointer bg-[#004385] text-white font-extrabold'>Investors</a>
                </div>
            </div>
        
        {/* <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style> */}
    </header>
  )
}

export default NavBar