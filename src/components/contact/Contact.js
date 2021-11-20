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

      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" onClick={cancel}>
                      CANCEL
                    </button>
                    <button className="app-form-button" onClick={submit}>
                      SEND
                    </button>
                    {/* <span
                      id="sent-message"
                      className={emailSent ? 'visible' : null}
                    >
                      Thank you for your message, I will be in touch in no time!
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row className="communication">
          <Col xs={6}>
            <i className="address">
              <FaMapMarkerAlt /> Berlin, Germany
            </i>
            <br />
            <br />
            <i className="email">
              <FaEnvelope /> fatihce57@gmail.com
            </i>
          </Col>
          <Col xs={6} className="social_media">
            <h3 className="aboutme">Informations </h3>
            <p>
              You can always contact me via my social media accounts or mail. I
              will give you feedback within 1 day.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
