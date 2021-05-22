import './skills.css';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";
import { Container, Row, Col } from 'react-bootstrap'


function Skills() {
  return (
    <div className="skills">

      <h1 id="skillshead">Skills</h1>


      <Container className="mt-5">
        <Row>
          <Col className="skillsbar">
            <i className="html5"><FaHtml5 /></i>
            <div class="bar front expert" data-skill="HTML5"></div>
          </Col>
        </Row>
        <Row>
          <Col className="skillsbar">
            <i className="css3"><FaCss3Alt /></i>
            <div class="bar front advanced" data-skill="CSS3"></div>
          </Col>
        </Row>
        <Row>
          <Col className="skillsbar">
            <i className="js"><SiJavascript /></i>
            <div class="bar front learning" data-skill="Javascript"></div>
          </Col>
        </Row>
        <Row>
          <Col className="skillsbar">
            <i className="react"><SiReact /></i>
            <div class="bar front basic" data-skill="React"></div>
          </Col>
        </Row>

      </Container>

    </div>





  );
}

export default Skills;
