import './About.scss'
import { Container, Row, Col, Image, Figure } from 'react-bootstrap'

function About() {
  return (
    <div className="about pt-5">
      <Container >
        <Row className="justify-content-center">
          <Col xs={6} sm={6} md={5} xl={3}>
            <Figure className="about-fatih">
              <Image src="./images/fatihphoto.jpg" roundedCircle />
            </Figure>
          </Col>
          <Col xs={12} sm={12} md={7} xl={7}>
            <p className="about-text">
              I studied economics in Turkey. I have work experience in different
              fields. I am married with a wonderful wife and 2 children. I took
              a full-stack web developer course in Berlin at DCI. I enjoy
              building interactive, effect-heavy JavaScript applications with an
              eye on animated content and love doing projects with React. I like
              to do projects together with the team.
            </p>
          </Col>
        </Row>
        <Row className="slider">
          <div className="caption mt-5">
            I am a &nbsp;
            <div className="text-box">
              <div>father</div>
              <div>React web developer</div>
              <div>Mern Stack developer</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default About
