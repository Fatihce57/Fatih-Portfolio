import React from 'react'
import './Contact.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className="contact">
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">CANCEL</button>
                    <button class="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row className="communication">
          <Col xs={6} >
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
              You can always contact me via my social media accounts or mail. I will give you feedback within 1 day.
            </p>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Contact
