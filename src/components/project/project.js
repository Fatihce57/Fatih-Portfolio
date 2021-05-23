import './project.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Project() {
  return (
    <div className="project">
      <h2 id="projecthead">Project</h2>

      <Container className="text-dark mt-5">
        <Row className="justify-content-center">
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="primary">
              <iframe className="project-images" src="https://marsperseverance.netlify.app/" frameborder="0"></iframe>
              <Card.Body>
                <Card.Header>Perseverance</Card.Header>
                <Card.Text style={{ height: '8rem' }}>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
      </Card.Text>
         <Button variant="outline-primary" href="https://marsperseverance.netlify.app/" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="danger">
              <iframe className="project-images" src="https://analoguhr.netlify.app/" frameborder="0"></iframe>
              <Card.Body>
                <Card.Header>Clock</Card.Header>
                <Card.Text style={{ height: '8rem' }}>
                  This card has supporting text below as a natural lead-in to additional
        content.
                </Card.Text>
                <Button variant="outline-danger" href="https://analoguhr.netlify.app/" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="warning">
              <iframe className="project-images" src="https://filmmovies.netlify.app/" frameborder="0"></iframe>
              <Card.Body>
                <Card.Header>Film Movies</Card.Header>
                <Card.Text style={{ height: '8rem' }}>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
      </Card.Text>
      <Button variant="outline-warning" href="https://filmmovies.netlify.app/" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="success">
              <iframe className="project-images" src="https://googlesearchbar.netlify.app/" frameborder="0"></iframe>
              <Card.Body>
                <Card.Header>Google Search Bar</Card.Header>
                <Card.Text style={{ height: '8rem' }}>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
      </Card.Text>
      <Button variant="outline-success" href="https://googlesearchbar.netlify.app/" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="info">
              <img className="project-images" src="images/comingsoon.jpg" alt="" />
               <Card.Body>
                <Card.Header>City Project</Card.Header>
                <Card.Text style={{ height: '8rem' }}>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
      </Card.Text>
      <Button variant="outline-info" href="#">Link</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>




    </div>
  );
}

export default Project;