import "./about.css";
import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

function About() {
  return (
    <div className="about">
      <h2 id="abouthead">About me</h2>


      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={6} sm={7} md={5} lg={4}>
            <Figure className="about-fatih">
              <Image src="./images/fatihphoto.jpg" roundedCircle />
              <figcaption>Fatih</figcaption>
            </Figure>
          </Col>

          <Col xs={12} sm={12} md={7} lg={8}>
            <p className="about-text">
              I studied economics in Turkey. I have work experience in different fields. I have been living in Germany since 2018. I'm currently taking a full-stack web developer course in Germany at DCI. I enjoy building interactive, effect-heavy JavaScript applications with an eye on animated content. I love doing projects with React.</p>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default About;
