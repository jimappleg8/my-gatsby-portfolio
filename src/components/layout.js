import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainNav from './nav'
import Footer from './footer'
import "@fontsource/open-sans"
import "@fontsource/merriweather"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'

const Layout = ({ children }) => {
  return (
    <Container className="main" id="top">
      <MainNav />
      <Container>
        <Row>
          <Col md={12}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Layout