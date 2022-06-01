import React from 'react'
import './WorkCardStyles.css'
import client1 from '../assets/project1.png'

const WorkCard = () => {
    return(
        <div className='work-container'>
            <h1 className='project-heading'>Customers</h1>

            <div className='project-container'>
                <div className='project-card'>
                    <img src={client1} alt='image'/>
                    <h2 className='project-title'>Calabria</h2>
                </div>

                <div className='project-card'>
                    <img src={client1} alt='image'/>
                    <h2 className='project-title'>Milenium Real Estate Services</h2>
                </div>

                <div className='project-card'>
                    <img src={client1} alt='image'/>
                    <h2 className='project-title'>Binyapi</h2>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
