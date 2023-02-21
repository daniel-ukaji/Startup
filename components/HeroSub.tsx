import React from 'react'
import Dashboard from '../images/Dashboard.png'
import Image from 'next/image'
import smallPictures from '../images/smallPictures.png'

function HeroSub() {
  return (
    <section className='bg-[#FFF8F0] pb-32'>
        <div className='flex max-w-6xl mx-auto justify-between'>
            <div className='flex flex-col justify-center pt-32'>
                <h1 className='text-5xl font-bold max-w-md pb-10 font-Poppins'>Discover your dream Startup</h1>
                <p className='max-w-md font-Poppins'>No need to worry about your files being lost because we are very loyal to be your storage platform.</p>
                <div className='flex items-center space-x-5'>
                    <Image alt='' src={smallPictures} className='w-16 h-16 object-contain' />
                    <p className='font-Poppins'>More than 10.000 people have tried</p>
                </div>
                <div className='space-x-5 mt-10'>
                    <a href="#" className='border pt-2 pb-2 pl-6 pr-6 rounded cursor-pointer bg-[#152C5B] text-white font-Poppins'>Try for Free</a>
                </div>
            </div>
            <div className='relative w-1/2 h-96 mt-20'>
                <Image alt='' src={Dashboard} layout='fill' objectFit='contain' />
            </div>
        </div>
    </section>
  )
}

export default HeroSub