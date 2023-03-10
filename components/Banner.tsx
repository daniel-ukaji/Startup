import Image from 'next/image'
import React from 'react'
import ServiceNow from '../images/ServiceNow.png'
import Paychex from '../images/Paychex.png'
import Github from '../images/GitHub.png'
import Stripe from '../images/Stripe.png'
import Zendesk from '../images/Zendesk.png'

function Banner() {
  return (
    <section>
        <div className='flex'>
            <Image alt='' src={ServiceNow} className='md:h-28 md:w-28 h-20 w-20  object-contain' />
            <Image alt='' src={Paychex} className='md:h-28 md:w-28 h-20 w-20 object-contain' />
            <Image alt='' src={Github} className='md:h-28 md:w-28 h-20 w-20 object-contain' />
            <Image alt='' src={Stripe} className='md:h-28 md:w-28 h-20 w-20 object-contain' />
            <Image alt='' src={Zendesk} className='md:h-28 md:w-28 h-20 w-20 object-contain' />
        </div>
    </section>
  )
}

export default Banner