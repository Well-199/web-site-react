import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Nome</label>
            <input type="text"/>

            <label>Email</label>
            <input type="email"/>

            <label>Assunto</label>
            <input type="text"/>

            <label>Mensagem</label>
            <textarea rows="6" placeholder="Escreva sua mensagem aqui"/>

            <button className='btn'>ENVIAR</button>
        </form>
    </div>
  )
}

export default Form