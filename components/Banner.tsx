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
        <div className='flex max-w-3xl mx-auto'>
            <Image alt='' src={ServiceNow} className='h-44 w-44 object-contain' />
            <Image alt='' src={Paychex} className='h-44 w-44 object-contain' />
            <Image alt='' src={Github} className='h-44 w-44 object-contain' />
            <Image alt='' src={Stripe} className='h-44 w-44 object-contain' />
            <Image alt='' src={Zendesk} className='h-44 w-44 object-contain' />
        </div>
    </section>
  )
}

export default Banner