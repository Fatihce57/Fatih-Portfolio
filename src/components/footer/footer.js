import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaCopyright, FaXing } from "react-icons/fa";


function Footer() {
  return (

    <div className="footer">
      <h2 id="contacthead">Contact</h2>

      <Container className="container_footer">
        <Container className="communication">
          <Row>
            <Col xs={12} sm={11} md={12} lg={12}>
              <i className="address"><FaMapMarkerAlt /> Berlin, Germany</i> <br /><br />
              {/* <i className="phone"><FaPhoneAlt /></i><br /> */}
              <i className="email"><FaEnvelope /> fatihce57@gmail.com</i>
            </Col>
          </Row>
        </Container>

        <Container className="social_media">
          <Row>
            <Col xs={12} sm={11} md={12} lg={12} >
              <h3 className="aboutme">Informations </h3>
              <p>I'm available for freelance work. Drop me a line if you fancy a chat. You can always contact me via my social media accounts or mail. I will give you feedback within 1 day.</p>
              <div className="container-sos-med">
                <a href="#/"><h3 className="sos_med"><FaFacebookF /></h3></a>
                <a href="#/"><h3 className="sos_med"><FaTwitter /></h3></a>
                <a href="https://www.linkedin.com/in/fatih-c-8a52061a9/" target="_blank"><h3 className="sos_med"><FaLinkedinIn /></h3></a>
                <a href="https://github.com/Fatihce57" target="_blank"><h3 className="sos_med"><FaGithub /></h3></a>
                <a href="https://www.xing.com/profile/Fatih_Cengiz21/cv" target="_blank"><h3 className="sos_med"><FaXing /></h3></a>
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
