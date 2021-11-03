import './Footer.scss'
import { Row, Col } from 'react-bootstrap'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCopyright,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">  
              <div className="container-sos-med">
            <a href="#/">
              <h3 className="sos_med">
                <FaFacebookF />
              </h3>
            </a>
            <a href="#/">
              <h3 className="sos_med">
                <FaTwitter />
              </h3>
            </a>
            <a href="https://www.linkedin.com/in/fatih-c-8a52061a9/">
              <h3 className="sos_med">
                <FaLinkedinIn />
              </h3>
            </a>
            <a href="https://github.com/Fatihce57">
              <h3 className="sos_med">
                <FaGithub />
              </h3>
            </a>
          </div>
          <h4 className="fatih">
           Fatih Cengiz{' '}
            <span className="copy">
              <FaCopyright />
            </span>{' '}
            2021
          </h4>
     
  
    </div>
  )
}

export default Footer
