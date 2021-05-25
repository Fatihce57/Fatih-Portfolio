import './skills.css';
import { FaHtml5, FaCss3Alt, FaSass, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
  return (
    <div className="skills">

      <h1 id="skillshead">Skills</h1>

      <Container>
        <Row>
          <Col xs={3}><i className="skills-icon html5"><FaHtml5 /></i></Col>
          <Col xs={{ span: 3, offset: 4 }}><i className="skills-icon css3"><FaCss3Alt /></i></Col>
        </Row>
        <Row>
          <Col xs={{ span: 3, offset: 3 }}><i className="skills-icon js"><SiJavascript /></i></Col>
          <Col xs={{ span: 3, offset: 3 }}><i className="skills-icon react"><SiReact /></i></Col>
        </Row>
        <Row>
          <Col xs={{ span: 3, offset: 1 }}><i className="skills-icon sass"><FaSass /></i> </Col>
          <Col xs={{ span: 3, offset: 4 }}><i className="skills-icon node" ><FaNodeJs /></i> </Col>
        </Row>
      </Container>

    </div>

  );
}

export default Skills;
