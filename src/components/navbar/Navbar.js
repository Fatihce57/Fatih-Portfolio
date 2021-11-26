import './Navbar.scss'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Col } from 'react-bootstrap'
import MultiPlayer from './multiplayer/MultiPlayer'

function Navigation() {
  return (
    <nav id="top" className="container-navbar">
      <Navbar
        className="fixed-top fw-bold fs-4"
        collapseOnSelect
        expand="md"
        variant="dark"
      >
        {/* <Link to="/" className="nav-link">
          <img className="fatih-logo" src="./images/logo.png" alt="fatih logo" />
        </Link> */}
        <span className="multiplayer">  <MultiPlayer
          urls={[
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          ]}
        /></span>
      
        <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col>
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default Navigation
