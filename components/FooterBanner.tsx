import Image from 'next/image'
import React from 'react'
import bannerOne from '../images/banner-one.jpg'
import bannerTwo from '../images/banner-two.jpg'

function FooterBanner() {
  return (
    <section className='relative mb-44 mt-14'>
        <div className='relative max-w-6xl mx-auto'>
          <Image src={bannerTwo} alt='#' className='h-80 min-w-[300px] object-cover rounded-2xl' />
        </div>

        <div className='absolute top-14 right-1/3 flex flex-col justify-center items-center space-y-10'>
            <p className='font-Poppins text-white pt-16 font-bold text-2xl'>Our Solution For Your Business</p>
            <a href="#" className='font-Poppins mt-10 pt-2 pb-2 pl-6 pr-6 rounded-md cursor-pointer bg-[#152C5B] text-white'>Try for Free</a>
        </div>
        {/* <div className='max-w-3xl bg-[#FFF8F0] mx-auto flex flex-col justify-center items-center pb-16'>
            <p className='font-Poppins pt-16 font-bold text-2xl'>Our Solution For Your Business</p>
            <a href="#" className='font-Poppins mt-10 border pt-2 pb-2 pl-6 pr-6 rounded-md cursor-pointer bg-[#152C5B] text-white'>Try for Free</a>
        </div> */}
    </section>
  )
}

export default FooterBanner