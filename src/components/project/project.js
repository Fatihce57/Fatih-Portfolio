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
                <Card.Text className="information">
                  It is a very nice website where you can find the latest up-to-date information about the space rocket Perseverance, which was sent to Mars by Nasa.
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
                <Card.Text className="information">
                  How would you like to keep track of your time in a digital clock prepared with JavaScript?
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
                <Card.Text className="information">
                  Would you like to check out a movie list made with React? It is not complete yet, but it is worth seeing even in its current state.
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
                <Card.Text className="information">
                  Are there things you shouldn't search for on Google. From here, you can easily access any information with the google search bar.
                </Card.Text>
                <Button variant="outline-success" href="https://googlesearchbar.netlify.app/" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="primary">
              <iframe className="project-images" src="https://expandingpictures.netlify.app/" frameborder="0"></iframe>
              <Card.Body>
                <Card.Header>Expanding Cards</Card.Header>
                <Card.Text className="information">
                  A javascript work that can be a source of inspiration for your projects. You can see the animated state of the pictures and add dynamism to your page.
                </Card.Text>
                <Button variant="outline-info" href="https://expandingpictures.netlify.app/" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-5" xs={10} sm={11} md={6} lg={4}>
            <Card border="info">
              <iframe className="project-images" src="https://wetterlage.netlify.app" frameborder="0"></iframe>
              <Card.Body>
                <Card.Header>Wetterlage</Card.Header>
                <Card.Text className="information">
                A good site where you can find out the weather forecast wherever you live in the world.
                </Card.Text>
                <Button variant="outline-info" href="https://wetterlage.netlify.app" target="_blank">Link</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>




    </div>
  );
}

export default Project;