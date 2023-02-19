import Image from 'next/image'
import React from 'react'
import HowItWork from '../images/HowItWork.png'

function HowItWorks() {
  return (
    <section>
        <div className='pb-10'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='font-bold text-3xl'>How It Works?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas ven</p>
            </div>
        <div className='flex justify-center items-center mt-10'>
            <Image src={HowItWork} alt='' className='h-96 w-3/4 object-contain' />
        </div>
            
        </div>
    </section>
  )
}

export default HowItWorks