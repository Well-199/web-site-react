import React from 'react'
import './WorkCardStyles.css'
import calabria from '../assets/calabria.PNG'
import milenium from '../assets/milenium.png'
import binyapi from '../assets/binyapi.png'

const WorkCard = () => {
    return(
        <div className='work-container'>
            <h1 className='project-heading'></h1>

            <div className='project-container'>
                <div className='project-card'>
                    <img src={calabria} alt='image'/>
                    <h2 className='project-title'>Calabria Seguranca</h2>
                </div>

                <div className='project-card'>
                    <img src={milenium} alt='image'/>
                    <h2 className='project-title'>Milenium Real Estate Services</h2>
                </div>

                <div className='project-card'>
                    <img src={binyapi} alt='image'/>
                    <h2 className='project-title'>Binyapi Serviços</h2>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
