import "./Header.scss";
import { BiWinkSmile } from 'react-icons/bi';
import { Container, Row, Col } from 'react-bootstrap';
import { IoChatbubbleEllipses } from "react-icons/io5";

function Header() {
  return (


    <div className="container_header">
   
        <Row>
          <Col className="head-res" xs={10} sm={10} md={11} lg={12}><div className="speed" id="linear"><h1 id="hello">Hello <span className="exclamation">!</span></h1></div></Col>
        </Row>
        <Row>
          <Col className="head-res" xs={10} sm={10} md={11} lg={12}><div className="speed" id="ease"><h2 className="fatihce">I'm <span className="header_fatih">Fatih</span> <span className="header_punkt"> <IoChatbubbleEllipses /></span></h2></div></Col>
        </Row>
        <Row>
          <Col className="head-res" xs={10} sm={10} md={11} lg={12}><div className="speed" id="easeIn"> <h2 className="stack">I'm a full-stack web developer <br /> candidate  <span className="smileicon"><BiWinkSmile /></span></h2></div></Col>
        </Row>

    </div>
  );
}

export default Header;