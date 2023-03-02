import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import HowItWorks from '../components/HowItWorks'
import HeroSub from '../components/HeroSub'
import HeroSubSub from '../components/HeroSubSub'
import FooterBanner from '../components/FooterBanner'
import Footer from '../components/Footer'
import FooterSub from '../components/FooterSub'
import NavBar from '../components/NavBar'
import HeroNew from '../components/HeroNew'

const Home: NextPage = () => {
  return (
    <div className="max-w-[100%]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-gradient-to-r from-white to-[#E3F8FF]'>
        <NavBar />
        <HeroNew />
      </div>
      {/* <Banner /> */}
      <HowItWorks />
      <HeroSub />
      <HeroSubSub />
      <FooterBanner />
      <Footer />
      <FooterSub />
    </div>
  )
}

export default Home
