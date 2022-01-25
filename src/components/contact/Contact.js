import React, { useState } from 'react'
import './Contact.scss'
import { Row, Col } from 'react-bootstrap'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
  FaEnvelopeOpenText,
} from 'react-icons/fa'
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
    const regex =
      /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  return (
    <Row className="contact pt-5">
      <Col
        xs={10}
        md={5}
        id="contact-form"
        className="form-horizontal m-0"
        role="form"
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-Mail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Tel Number"
            name="email"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control message"
            rows="8"
            placeholder="Your Message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            className="btn btn-warning send-button"
            id="submit"
            type="submit"
            value="send"
            onClick={submit}
          >
            <div className="alt-send-button">
              <FaEnvelopeOpenText />
              <span className="send-text">
                <FaPaperPlane />
              </span>
            </div>
          </button>
        </div>
        <div className="form-group">
          <button
            className="btn btn-warning send-button"
            id="submit"
            type="submit"
            value="send"
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </Col>
      <Col xs={10} md={5} className="direct-contact-container">
        <ul className="contact-list">
          <li>
            <h3 className="aboutme">Informations: </h3>
            <p>
              You can always contact me via my social media accounts or mail. I
              will give you feedback within 1 day.
            </p>
          </li>
          <hr />
          <li className="address">
            <FaMapMarkerAlt /> Berlin, Germany
          </li>
          <br />
          <li className="email">
            <FaEnvelope /> fatihce57@gmail.com
          </li>
        </ul>
      </Col>
    </Row>
  )
}

export default Contact
