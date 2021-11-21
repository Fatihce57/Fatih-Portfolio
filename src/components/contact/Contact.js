import React, { useState } from 'react'
import './Contact.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init('user_zyFQ1I52eq7fo5ZtPBvL1')

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const submit = () => {
    if (name && email && number && message) {
      const serviceId = 'service_llj1vke'
      const templateId = 'template_gp1nzhb'
      const userId = 'user_zyFQ1I52eq7fo5ZtPBvL1'
      const templateParams = {
        name,
        email,
        number,
        message,
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error))

      setName('')
      setEmail('')
      setNumber('')
      setMessage('')
      setEmailSent(true)
    } else {
      alert('Please fill in all fields.')
    }
  }

  const cancel = () => {
    setName('')
    setEmail('')
    setNumber('')
    setMessage('')
  }

  const isValidEmail = (email) => {
    const regex =/^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  return (
    <div className="contact">
      {/* <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
    */}

   




  
  <div class="contact-wrapper">
  

    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" required value={name} onChange={e => setName(e.target.value)}/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" required value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="number" class="form-control" id="number" placeholder="NUMBER" name="email" required value={number} onChange={e => setNumber(e.target.value)}/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required value={message} onChange={e => setMessage(e.target.value)}></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND" onClick={submit}>
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    

    
      <div class="direct-contact-container">

        <ul class="contact-list">
        <li className="address">
              <FaMapMarkerAlt /> Berlin, Germany
            </li>     
         <li className="email">
              <FaEnvelope /> fatihce57@gmail.com
            </li>

            <li>
            <h3 className="aboutme">Informations </h3>
            <p>
              You can always contact me via my social media accounts or mail. I
              will give you feedback within 1 day.
            </p>
            </li>
          
        </ul>



      </div>
    
  </div>
  





    </div>
  )
}

export default Contact
