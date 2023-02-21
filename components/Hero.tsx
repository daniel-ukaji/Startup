import Image from 'next/image'
import React from 'react'
import globe from '../images/globe.png'
import { Player } from '@lottiefiles/react-lottie-player'

function Hero() {
  return (
    <section>
        <div className='flex max-w-6xl mx-auto justify-between  space-x-20'>
            <div className='flex flex-col justify-center pt-18'>
                <p className='text-5xl font-black max-w-xl pb-5 font-Poppins tracking-normal leading-[1.35]'>A marketplace for startups in Africa</p>
                <p className='max-w-md font-Poppins text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia, molestiae quas ve</p>
                
                <div className='space-x-2 mt-16 text-xs tracking-wider'>
                    <a href="#" className='rounded-lg pt-3 pb-3 pl-10 pr-10 cursor-pointer bg-[#004385] text-white font-Poppins'>Investors</a>
                    <a href="#" className='border pt-3 pb-3 pl-10 pr-10 rounded-lg cursor-pointer font-Poppins'>Seller</a>
                </div>
            </div>
            {/* <div className='relative w-1/2 h-96 mt-32 '>
                <Image alt='' src={globe} layout='fill' objectFit='contain' />
            </div> */}
            <div>
                <Player 
                    src="https://lottie.host/9328bc2e-fc80-4bfd-a4d9-767513bf3102/Z4fcO3pGVf.json"
                    className='player'
                    loop
                    autoplay 
                    speed={5}
                />
            </div>
        </div>
    </section>
  )
}

export default Hero