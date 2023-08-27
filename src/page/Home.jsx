import React from 'react'
import Header from '../component/Header/Header'
import BestCard from '../component/bestCard/BestCard'
import Benefit from '../component/Benifit/Benefit.jsx'
import SpecialFood from '../component/SpecialFood/SpecialFood'
import OurApp from '../component/OurApp/OurApp'
import Footer from '../component/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <BestCard />
      <Benefit />
      <SpecialFood />
      <OurApp />

      <Footer />
    </>
  )
}

export default Home