import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <a href='https://www.google.com.br/maps/place/Av.+Paulista+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP/@-23.5657344,-46.6534266,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce59c8da0aa315:0xd59f9431f2c9776a!8m2!3d-23.5657393!4d-46.6512379' target='blank'>
                            <FaHome size={20} style={{color:"#FFF", marginRight:"2rem"}}/>
                        </a>
                        <div>
                            <p>São Paulo, Brazil</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <a href="https://wa.me/5511971668818?text=Olá,%20preciso%20de%20um%20Desenvolvedor%20ReactJS!" target="blank">
                                <FaPhone size={20} style={{color:"#FFF", marginRight:"2rem"}}/>
                                55 (11) 97166-8818
                            </a>
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <a href='mailto:wellsistemasweb@gmail.com' target='_blank'>
                                <FaMailBulk size={20} style={{color:"#FFF", marginRight:"2rem"}}/>
                                wellsistemasweb@gmail.com
                            </a>
                        </h4>
                    </div> 
                </div>

                <div className='right'>
                    <h4>Sobre WellSistemasWeb</h4>
                    <p> 
                        Desenvolvedor freelancer com o framework
                        ReactJS, também utilizo Nodejs no desenvolvimento de
                        softwares e React native para aplicativos android e ios.
                    </p>

                    <div className='social'>
                        <a href='https://www.instagram.com/wellsistemasweb/' target='blank'>
                            <FaInstagram size={30} style={{color:"#FFF", marginRight:"1rem"}}/>
                        </a>

                        {/* Canal no youtube video aulas no lugar do twitter */}
                        <FaTwitter size={30} style={{color:"#FFF", marginRight:"1rem"}}/>
                        <a href='https://www.linkedin.com/in/wellington-lira-704018180/' target='blank'>
                            <FaLinkedin size={30} style={{color:"#FFF", marginRight:"1rem"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
