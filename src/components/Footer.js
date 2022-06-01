import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{color:"#FFF", marginRight:"2rem"}}/>
                        <div>
                            <p>São Paulo, Brazil</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{color:"#FFF", marginRight:"2rem"}}/>
                            55 (11) 97166-8818
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#FFF", marginRight:"2rem"}}/>
                        wellsistemasweb@gmail.com
                        </h4>
                    </div> 
                </div>

                <div className='right'>
                    <h4>About the company</h4>
                    <p>
                        This is me Wellington Lira. CEO &  
                        Founder of WellSistemasWeb. 
                        I'm also a React, React native and Nodejs developer
                    </p>

                    <div className='social'>
                        <FaFacebook size={30} style={{color:"#FFF", marginRight:"1rem"}}/>

                        {/* Canal no youtube video aulas no lugar do twitter */}
                        <FaTwitter size={30} style={{color:"#FFF", marginRight:"1rem"}}/>
                        <FaLinkedin size={30} style={{color:"#FFF", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
