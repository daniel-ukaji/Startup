import React from 'react'
import Dashboard from '../images/Dashboard.png'
import smallPictures from '../images/smallPictures.png'
import Image from 'next/image'

function HeroSubSub() {
  return (
    <section className='pb-32'>
        <div className='flex flex-col-reverse md:flex-row max-w-6xl mx-auto justify-between items-center'>
            <div className='relative w-[70%] md:w-1/2 h-96 mt-20'>
                <Image alt='' src={Dashboard} layout='fill' objectFit='contain' />
            </div>
            <div className='flex flex-col justify-center pt-32 items-center md:items-start'>
                <h1 className='text-center md:text-start text-5xl font-bold max-w-lg pb-7 leading-tight font-Poppins'>Sell quickly, easily, and from anywhere</h1>
                <p className='text-center md:text-start max-w-sm font-Poppins text-sm text-gray-600'>No need to worry about your files being lost because we are very loyal to be your storage platform.</p>
                <div className='flex items-center space-x-5'>
                    <Image alt='' src={smallPictures} className='w-16 h-16 object-contain' />
                    <p className='font-Poppins text-sm font-semibold'>More than 10.000 people have tried</p>
                </div>
                <div className='space-x-5 mt-10'>
                    <a href="#" className='border pt-3 pb-3 pl-10 pr-10 rounded-lg cursor-pointer bg-[#152C5B] text-white font-Poppins'>Try for Free</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSubSub