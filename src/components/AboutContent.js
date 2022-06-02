import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Quem é wellsistemasweb?</h1>
            <p> 
                Menu nome é Wellington Lira e 
                depois de alguns anos na areá administrativa decidi
                iniciar minha carreira como freelancer criando software com C# 
                mas devido ao alto custo para meus primeiros clientes 
                migrei para PHP e logo descobri que a hospedagem compartilhada
                que tinha um custo menor e era bem atrativa também tinha
                uma performance horrível para quem precisa 
                de aplicações integradas com back-end e banco de dados,
                então decidi adotar como stack principal no desenvolvimento
                de software a linguagem Javascript juntamente com React para front-end,
                react native para desenvolvimento mobile, 
                node js para back-end, banco de dados postgreSQL 
                e a segurança dos servidores aws.
            </p>
            <Link to="/contact">
                <button className='btn'>Contato</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent