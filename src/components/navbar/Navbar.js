import "./Navbar.scss";
import { Link } from 'react-router-dom'
import { Nav, Navbar, Row, Col } from 'react-bootstrap';

function Navigation() {
  return (
    <nav id="top" className="container-navbar">
      <Row>
        <Navbar className="fixed-top fw-bold fs-4" collapseOnSelect expand="lg" variant="dark">
          <Link to="/"className="fw-bold fs-4 text-danger" >Home</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Col>
              <Nav className="mr-auto">
                <Link to="/about" className="text-danger" >About</Link>
                <Link to="/projects" className="text-danger" >Projects</Link>
                <Link to="/skills" className="text-danger" >Skills</Link>
                <Link to="/contact" className="text-danger" >Contact</Link>
              </Nav>
            </Col>
         </Navbar.Collapse>
        </Navbar>
      </Row>
    </nav>
  );
}

export default Navigation;
