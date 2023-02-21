import Image from 'next/image'
import React from 'react'
import GroundDesk from '../images/GroundDesk.png'

function Footer() {
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-[#F9F9F9] text-gray-600'>
        <div className='font-Poppins text-xs text-gray-800'>
            <div className='block'>
                <Image alt='' src={GroundDesk} className='w-36 h-36 object-contain border' />
            </div>
            <p>Manage file easily</p>
            <p>Everywhere, everytime</p>
        </div>
        <div className='font-Poppins space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Company</h5>
            <p>About Us</p>
            <p>Product</p>
            <p>Testimonial</p>
        </div>
        <div className='font-Poppins space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
        </div>
        <div className='font-Poppins space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Our Works</h5>
            <p>Pricing</p>
            <p>Customer</p>
            <p>Product</p>
        </div>
    </div>
    </section>
  )
}

export default Footer