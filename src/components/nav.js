import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav() {
  return (
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#top">Jim Applegate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainNav;