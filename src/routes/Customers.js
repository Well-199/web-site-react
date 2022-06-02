import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Customers = () => {

  let txt = `Quem atualmente utiliza software desenvolvido pela wellsistemasweb?`

  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CLIENTES" text={txt}/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Customers