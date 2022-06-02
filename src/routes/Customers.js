import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Customers = () => {

  let txt = `Who currently uses software developed by wellsistemasweb`

  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CUSTOMERS" text={txt}/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Customers