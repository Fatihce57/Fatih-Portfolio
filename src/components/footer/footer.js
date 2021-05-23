import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaCopyright } from "react-icons/fa";


function Footer() {
  return (

    <div className="footer">
      <h2 id="contacthead">Contact</h2>

      <Container className="container_footer">
        <Container className="communication">
          <Row>
            <Col xs={12} sm={11} md={12} lg={12}>
            <i className="address"><FaMapMarkerAlt /> Berlin, Germany</i> <br />
            <i className="phone"><FaPhoneAlt /> +49 178 000 00</i><br />
            <i className="email"><FaEnvelope /> fatihce57@gmail.com</i>
            </Col>
          </Row>
        </Container>

        <Container className="social_media">
          <Row>
            <Col xs={12} sm={10} md={12} lg={12} >
          <h3 className="aboutme">Informations </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum totam quia labore aperiam inventore blanditiis optio excepturi, ab ipsa quasi fuga, esse in quas saepe molestiae aut a non?</p>
          <div className="container-sos-med">
            <a href="#/"><h3 className="sos_med"><FaFacebookF /></h3></a>
            <a href="#/"><h3 className="sos_med"><FaTwitter /></h3></a>
            <a href="https://www.linkedin.com/feed/" target="_blank"><h3 className="sos_med"><FaLinkedinIn /></h3></a>
            <a href="https://github.com/Fatihce57" target="_blank"><h3 className="sos_med"><FaGithub /></h3></a>
          </div>
          </Col>
          </Row>
        </Container>
      </Container>
      <Container>
      <h4 className="fatih">Fatih Cengiz <span className="copy"><FaCopyright /></span> 2021</h4>
      </Container>
    
    </div>
  );
}

export default Footer;
