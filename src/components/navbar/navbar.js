import "./navbar.css";
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Navigation() {
  return (
   
     
        <nav id="top" className="container-navbar">
 
        {/* <div>
        <img className="logo" src="./images/logo.png" alt="" />
        </div> */}

         {/* <div class="collapse" id="navbarToggleExternalContent">
  <div class="p-4">
    
    <nav class="text-white h4">
    <li>
            <a href="#hello"><button class="glow-on-hover" type="button">Home</button></a> 
            </li>
            <li>
            <a href="#abouthead"><button class="glow-on-hover" type="button">About</button></a> 
            </li>
            <li>
            <a href="#projecthead"><button class="glow-on-hover" type="button">Projects</button></a> 
            </li>
            <li>
           <a href="#skillshead"><button class="glow-on-hover" type="button">Skills</button></a> 
            </li>
            <li>
            <a href="#contacthead"><button class="glow-on-hover" type="button">Contact</button></a> 
            </li>

    </nav>
   
  </div>
</div>
<nav class="navbar navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>  */}


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
    </Nav>
    </Col>
    <Col >
    <Nav className="sos-med">
    <Nav.Link className="text-warning" href="#contacthead">Contact</Nav.Link>
    <Nav.Link href="#/"><h3 className="sos_med"><FaFacebookF /></h3></Nav.Link>
    <Nav.Link href="#/"><h3 className="sos_med"><FaTwitter /></h3></Nav.Link>
    <Nav.Link href="https://www.linkedin.com/feed/" target="_blank"><h3 className="sos_med"><FaLinkedinIn /></h3></Nav.Link>
    <Nav.Link href="https://github.com/Fatihce57" target="_blank"><h3 className="sos_med"><FaGithub /></h3></Nav.Link>
    </Nav>
    </Col>
  </Navbar.Collapse>
</Navbar>

</Row>



        </nav>




  );
}

export default Navigation;
