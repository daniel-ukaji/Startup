import Image from 'next/image'
import React from 'react'
import globe from '../images/globe.png'

function Hero() {
  return (
    <section>
        <div className='flex max-w-6xl mx-auto justify-between'>
            <div className='flex flex-col justify-center pt-32'>
                <h1 className='text-5xl font-bold max-w-lg pb-10'>A marketplace for startups in Africa</h1>
                <p className='max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas ve</p>
                <div className='space-x-5 mt-10'>
                <a href="#" className='border pt-2 pb-2 pl-8 pr-8 rounded cursor-pointer bg-[#004385] text-white'>Investors</a>
                    <a href="#" className='border pt-2 pb-2 pl-10 pr-10 rounded cursor-pointer bg-white'>Seller</a>
                </div>
            </div>
            <div className='relative w-1/2 h-96 mt-20'>
                <Image alt='' src={globe} layout='fill' objectFit='contain' />
            </div>
        </div>
    </section>
  )
}

export default Hero