import "./about.css";
import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

function About() {
  return (
    <div className="about">
      <h2 id="abouthead">About me</h2>
     

<Container>
  <Row className="mt-5">
    <Col sm={3}>

      <Figure className="about-fatih">      
    <Image className="w-100 h-100" src="./images/fatihphoto.jpg" roundedCircle />  
    <figcaption>Fatih</figcaption>
    </Figure>
    
    </Col>
    <Col sm={8}><p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt,
          consectetur inventore at, quam illo sint facilis praesentium nam dicta,
          consequatur veritatis asperiores temporibus soluta sapiente rerum
          necessitatibus aspernatur in. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Animi incidunt, consectetur inventore at, quam illo
          sint facilis praesentium nam dicta, consequatur veritatis asperiores
          temporibus soluta sapiente rerum necessitatibus aspernatur in.
      </p></Col>
  </Row>
  
</Container>

    </div>
  );
}

export default About;
