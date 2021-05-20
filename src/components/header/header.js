import "./header.css";
import { BiWinkSmile } from 'react-icons/bi';
import { Container, Row, Col} from 'react-bootstrap';


function Header() {
  return (


    <div className="container_header">

<Container className="text">
  <Row>
    <Col><div class="speed" id="linear"><h1 id="hello">Hello <span className="exclamation">!</span></h1></div></Col>
   </Row>
  <Row>
    <Col><div class="speed" id="ease"><h2 className="fatihce">I'm <span className="header_fatih">Fatih</span> <span className="header_punkt">.</span></h2></div></Col>
   </Row>
   <Row>
    <Col><div class="speed" id="easeIn"> <h2 className="stack">I'm a full-stack web developer <br /> candidate  <span className="smileicon"><BiWinkSmile /></span></h2></div></Col>
   </Row>
</Container>

      
    </div>
  );
}

export default Header;