import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav() {
  return (
      <Navbar bg="light" variant="light" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/favicon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Jim Applegate logo"
            />Jim Applegate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button 
									href="/resume/jim-applegate-resume.pdf"
									variant="dark"
									size="md"
                  className="resume-btn"
									>
									 Resume
								</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default MainNav;