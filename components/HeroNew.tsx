import Image from 'next/image'
import React from 'react'
import globe from '../images/globe.png'
import { Player } from '@lottiefiles/react-lottie-player'
import Banner from './Banner'

function HeroNew() {
  return (
    <section>
        <div className='flex flex-col md:flex-row max-w-6xl mx-auto md:justify-between md:items-center space-x-20 md:mb-44 '>
            <div className='flex flex-col justify-center items-center md:items-start md:mt-24 mt-20 '>
                <p className='text-center md:text-left mb-5 md:mb-0 text-5xl mt-10 font-black md:max-w-xl md:pb-5 font-Poppins tracking-normal md:leading-[1.35]'>A marketplace for startups in Africa</p>
                <p className='text-center md:text-left max-w-md font-Poppins text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia, molestiae quas ve</p>
                
                <div className='space-x-2 mt-16 text-xs tracking-wider'>
                    <a href="#" className='rounded-lg pt-3 pb-3 pl-10 pr-10 cursor-pointer bg-[#004385] text-white font-Poppins'>Investors</a>
                    <a href="#" className='border pt-3 pb-3 pl-10 pr-10 rounded-lg cursor-pointer font-Poppins'>Seller</a>
                </div>
            </div>
            {/* <div className='relative w-1/2 h-96 mt-32 '>
                <Image alt='' src={globe} layout='fill' objectFit='contain' />
            </div> */}
            <div className='h-96 w-96 md:w-2/3'>
                <Player 
                    src="https://lottie.host/9328bc2e-fc80-4bfd-a4d9-767513bf3102/Z4fcO3pGVf.json"
                    className='player '
                    loop
                    autoplay 
                    speed={5}
                />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center md:items-start max-w-6xl mx-auto'>
            <p className='font-Poppins font-semibold'>Our Trusted sponsors</p>
            <Banner />
        </div>
    </section>
  )
}

export default HeroNew