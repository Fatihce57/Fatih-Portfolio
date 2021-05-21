import './project.css';
import {Carousel, Container, Row} from 'react-bootstrap'

function Project() {
  return (
    <div className="project">
      <h2 id="projecthead">Project</h2>

    
    <Container>
      <Row>
<Carousel className="container-corousel">

    <Carousel.Item>
  <h3>Perseverance</h3>
   <iframe className="project-images d-block w-100" src="https://marsperseverance.netlify.app/" frameborder="0"></iframe>
    </Carousel.Item>

     <Carousel.Item>
  <h3>Clock</h3>
    <iframe className="project-images d-block w-100" src="https://analoguhr.netlify.app/" frameborder="0"></iframe>
    </Carousel.Item>
   
  <Carousel.Item>
  <h3>Movies</h3>
    <iframe className="project-images d-block w-100" src="https://filmmovies.netlify.app/" frameborder="0"></iframe>
    </Carousel.Item>
    
  <Carousel.Item>
  <h3>Google Search</h3>
    <iframe className="project-images d-block w-100" src="https://googlesearchbar.netlify.app/" frameborder="0"></iframe>
   </Carousel.Item>

</Carousel>
</Row>
</Container>
      

    </div>
  );
}

export default Project;