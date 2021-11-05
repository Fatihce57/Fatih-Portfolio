import './Skills.scss'
import { FaHtml5, FaCss3Alt, FaSass, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiReact, SiMongodb, SiFigma } from 'react-icons/si'
import { Row, Col } from 'react-bootstrap'

function Skills() {
  return (
    <div className="skills">
      <h1 id="skillshead">Skills</h1>
      <div className="skills-container">
        <Row className="m-0 justify-content-center">
          <Col xs={3}>
            <i className="skills-icon html5">
              <FaHtml5 />
            </i>
          </Col>
          <Col xs={{ span: 2, offset: 1 }}>
            <i className="skills-icon mongodb">
              <SiMongodb />
            </i>
          </Col>
          <Col xs={{ span: 2, offset: 1 }}>
            <i className="skills-icon css3">
              <FaCss3Alt />
            </i>
          </Col>
        </Row>
        <Row className="m-0 justify-content-center">
          <Col xs={{ span: 1, offset: 3 }}>
            <i className="skills-icon js">
              <SiJavascript />
            </i>
          </Col>
          <Col xs={{ span: 5, offset: 3 }}>
            <i className="skills-icon react">
              <SiReact />
            </i>
          </Col>
        </Row>
        <Row className="m-0 justify-content-center">
          <Col xs={{ span: 3, offset: 1 }}>
            <i className="skills-icon sass">
              <FaSass />
            </i>
          </Col>
          <Col xs={{ span: 3, offset: 1 }}>
            <i className="skills-icon figma">
              <SiFigma />
            </i>
          </Col>
          <Col xs={{ span: 3, offset: 1 }}>
            <i className="skills-icon node">
              <FaNodeJs />
            </i>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Skills
