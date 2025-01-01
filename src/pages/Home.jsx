import React from 'react'
import Hero from "../components/Hero"
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Subcription from '../components/Subcription'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Subcription />
    </div>
  )
}

export default Home