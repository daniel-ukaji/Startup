import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import HeroNew from '../components/HeroNew'
import HeroSubNew from '../components/HowItNowWorks'
import HowItNowWorks from '../components/HowItNowWorks'
import HeroSub from '../components/HeroSub'
import HeroSubSub from '../components/HeroSubSub'

function NewPage() {
  return (
    <div>
        <NavBar />
        <HeroNew />
        <HowItNowWorks />
        <HeroSub />
        <HeroSubSub />
    </div>
  )
}

export default NewPage