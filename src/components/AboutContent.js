import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>
                After a few years in the administrative area in several companies

                I founded wellsistemasweb creating software with C#

                but due to the high cost for my first clients

                I migrated to PHP and soon discovered that shared hosting

                which had a lower cost and was very attractive also had

                a horrible performance for those who need it

                of applications integrated with back-end and database,

                so I decided to adopt as main stack in development

                of software the Javascript Language with React for front-end,

                react native for mobile development,

                node js for backend, postgreSQL database

                and the security of aws servers.
            </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>

        {/* <div className='right'>
            <div className='img-container'>
                <div className='top'>
                    <img src={React1} className="img" alt="true"/>
                </div>

                <div className='bottom'>
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default AboutContent