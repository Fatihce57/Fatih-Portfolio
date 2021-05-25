import "./navbar.css";
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Navigation() {
  return (


    <nav id="top" className="container-navbar">

      <Row>

        <Navbar className="fixed-top fw-bold fs-4" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand className="fw-bold fs-4 text-danger" href="#top">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Col>
              <Nav className="mr-auto">
                <Nav.Link className="text-danger" href="#abouthead">About</Nav.Link>
                <Nav.Link className="text-danger" href="#projecthead">Project</Nav.Link>
                <Nav.Link className="text-danger" href="#skillshead">Skills</Nav.Link>
                <Nav.Link className="text-danger" href="#contacthead">Contact</Nav.Link>
              </Nav>
            </Col>
            {/* <Col className="sos-contact" >
              <Nav className="sos-med">
                <Nav.Link className="text-warning" href="#contacthead">Contact</Nav.Link>
                <Nav.Link href="#/"><h3 className="sos_med"><FaFacebookF /></h3></Nav.Link>
                <Nav.Link href="#/"><h3 className="sos_med"><FaTwitter /></h3></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/feed/" target="_blank"><h3 className="sos_med"><FaLinkedinIn /></h3></Nav.Link>
                <Nav.Link href="https://github.com/Fatihce57" target="_blank"><h3 className="sos_med"><FaGithub /></h3></Nav.Link>
              </Nav>
            </Col> */}
          </Navbar.Collapse>
        </Navbar>

      </Row>



    </nav>




  );
}

export default Navigation;
