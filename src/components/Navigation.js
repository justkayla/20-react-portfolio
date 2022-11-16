// * A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Kayla's Portfolio!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">              
              <NavDropdown.Item href="/about">
                About me
              </NavDropdown.Item>   
              <NavDropdown.Item href="/contact">
                Contact me
              </NavDropdown.Item>              
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/justkayla" target="_blank" rel="noopener noreferrer">
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/kayla-justice-m-a-66654183/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
