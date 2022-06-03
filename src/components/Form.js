import React, { useState } from 'react'
import './FormStyles.css'

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function send (){

    if(name===''||email===''||subject===''||message===''){
    
      document.querySelector('.btn').innerHTML = 'PREENCHA TODOS OS CAMPOS'
      
      setTimeout(() => {
        document.querySelector('.btn').innerHTML = 'ENVIAR'
      }, 1300)
    }
    else{
      setName('')
      setEmail('')
      setSubject('')
      setSubject('')
      setMessage('')

      document.querySelector('.btn').innerHTML = 'sending ...'
      
      setTimeout(() => {
        document.querySelector('.btn').innerHTML = 'Thank you!'
      }, 1200)

      setTimeout(() => {
        document.querySelector('.btn').innerHTML = 'ENVIAR'
      }, 2600)
    }
    
  }

  return (
    <div className='form'>
        <form>
            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Email</label>
            <input type="email" value={email} 
            onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}/>

            <label>Assunto</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>

            <label>Mensagem</label>
            <textarea rows="6" placeholder="Escreva sua mensagem aqui"
            value={message} onChange={(e) => setMessage(e.target.value)}/>

            <button className='btn loader' onClick={send} type='button'>ENVIAR</button>
        </form>
    </div>
  )
}

export default Form
