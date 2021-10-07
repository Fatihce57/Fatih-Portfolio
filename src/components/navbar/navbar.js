import "./navbar.css";
import { Nav, Navbar, Row, Col } from 'react-bootstrap';

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
         </Navbar.Collapse>
        </Navbar>
      </Row>
    </nav>
  );
}

export default Navigation;
