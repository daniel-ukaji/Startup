import React from 'react'
import Dashboard from '../images/Dashboard.png'
import Image from 'next/image'
import smallPictures from '../images/smallPictures.png'

function HeroSub() {
  return (
    <section className='bg-[#FFF8F0] pb-32'>
        <div className='flex flex-col md:flex-row items-center max-w-6xl mx-auto justify-between'>
            <div className='flex flex-col justify-center items-center md:items-start pt-32'>
                <h1 className='text-center md:text-start text-5xl font-bold max-w-sm pb-7 leading-tight font-Poppins'>Discover your dream Startup</h1>
                <p className='text-center md:text-start max-w-sm font-Poppins text-sm text-gray-600'>No need to worry about your files being lost because we are very loyal to be your storage platform.</p>
                <div className='flex items-center space-x-5'>
                    <Image alt='' src={smallPictures} className='w-16 h-16 object-contain' />
                    <p className='font-Poppins text-sm font-semibold'>More than 10.000 people have tried</p>
                </div>
                <div className='space-x-5 mt-10 text-xs'>
                    <a href="#" className='border pt-3 pb-3 pl-10 pr-10 rounded-lg cursor-pointer bg-[#152C5B] text-white font-Poppins'>Try for Free</a>
                </div>
            </div>
            <div className='relative w-[28rem] md:w-1/2 h-96 mt-20'>
                <Image alt='' src={Dashboard} layout='fill' objectFit='contain' />
            </div>
        </div>
    </section>
  )
}

export default HeroSub