// * A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

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
              <Nav.Link exact activeClassName="is-active">
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/projects">
              <Nav.Link activeClassName="is-active">Projects</Nav.Link>
            </LinkContainer>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <LinkContainer to="/about">
                <NavDropdown.Item activeClassName="is-active">
                  About me
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/contact">
                <NavDropdown.Item activeClassName="is-active">
                  Contact me
                </NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://github.com/justkayla"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
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
