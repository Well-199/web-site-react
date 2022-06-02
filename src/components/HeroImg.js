import React from 'react'
import './HeroImgStyles.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return(
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt="IntroImg"/>
            </div>
            <div className='content'>
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/customers" className="btn">Clientes</Link>
                    <Link to="/contact" className="btn btn-light">Contato</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg