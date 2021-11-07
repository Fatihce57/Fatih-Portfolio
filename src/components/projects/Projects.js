import './Projects.scss'
import { Row, Col, Card, Button,ListGroupItem } from 'react-bootstrap'
import data from './data.json'

function Project() {
  return (
    <div className="project">
      <h2 id="projecthead">Project</h2>
        <Row className="d-flex justify-content-center">  
        {data.map(item => {
          return (
            <Col key={item.id} xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center p-5">
            <Card  className="project-card">
            <Card.Link
                    className="card-link"
                    href={item.url}
                    target="_blank"
                  >
                    <Card.Img className="card-image" variant="top" src={item.image} />
                  </Card.Link>
              <ListGroupItem className="title p-2">
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text>
                  {item.overview}
                </Card.Text>
              </ListGroupItem>
              <ListGroupItem className="technologies p-2">
                <Card.Title className="card-title">Technologies</Card.Title>
                <Card.Text>
                  {item.technologies}
                </Card.Text>
              </ListGroupItem>
              <ListGroupItem className="p-2 d-flex justify-content-between">
                <Button className="button">
                  <Card.Link
                    className="card-link"
                    href={item.github}
                    target="_blank"
                  >
                    GitHub
                  </Card.Link>
                </Button>
                <Button className="button">
                  <Card.Link
                    className="card-link"
                    href={item.url}
                    target="_blank"
                  >
                    Live
                  </Card.Link>
                </Button>
              </ListGroupItem>
            </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Project
