import './footer.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (

    <div className="footer">
<h2 id="contacthead">Contact</h2>

      <div className="container_footer">
        <div className="communication">

          <h3 className="address"><FaMapMarkerAlt /><span className="com-icon">Berlin, Germany</span></h3> <br />
          <h3 className="phone"><FaPhoneAlt /> <span className="com-icon">+49 178 000 00 00</span></h3><br />
          <h3 className="email"><FaEnvelope /><span className="com-icon">fatihce57@gmail.com</span></h3>

        </div>
        <div className="social_media">
          <h3 className="aboutme">Informations </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum totam quia labore aperiam inventore blanditiis optio excepturi, ab ipsa quasi fuga, esse in quas saepe molestiae aut a non?</p>

          <div className="container-sos-med">

            <a href="#/"><h3 className="sos_med"><FaFacebookF /></h3></a>
            <a href="#/"><h3 className="sos_med"><FaTwitter /></h3></a>
            <a href="https://www.linkedin.com/feed/" target="_blank"><h3 className="sos_med"><FaLinkedinIn /></h3></a>
            <a href="https://github.com/Fatihce57" target="_blank"><h3 className="sos_med"><FaGithub /></h3></a>

          </div>
        </div>
      </div>
      <h4 className="fatih">Fatih Cengiz <span className="copy"><FaCopyright /></span> 2021</h4>
    </div>
  );
}

export default Footer;
