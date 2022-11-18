// * A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navigation({ activeTab, setActiveTab }) {
  console.log(setActiveTab);

  return (
    <Navbar
      className="m-3"
      sticky="top"
      expand="lg"
      style={{ backgroundColor: "#F0966A" }}
    >
      <Container className="m-0" style={{ backgroundColor: "whitesmoke" }}>
        <LinkContainer to="/">
          <Navbar.Brand>Portfolio</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link eventKey={1}>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/projects">
              <Nav.Link eventKey={2}>Projects</Nav.Link>
            </LinkContainer>

            <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
              <LinkContainer to="/about">
                <NavDropdown.Item eventKey={3.1}>About me</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/contact">
                <NavDropdown.Item eventKey={3.2}>Contact me</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <NavDropdown.Item
                eventKey={3.3}
                href="https://github.com/justkayla"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey={3.4}
                href="https://www.linkedin.com/in/kayla-justice-m-a-66654183/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
