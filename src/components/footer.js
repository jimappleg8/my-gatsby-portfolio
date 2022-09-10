import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={12} md={{ span: 2, offset: 1 }}>
            <p className="text-muted text-left ">&copy; 2022 Jim Applegate</p>
          </Col>

          <Col xs={12} md={{ span: 6, offset: 2 }}>
            <a className="section-jump" href="#top">
              <FontAwesomeIcon icon={faAngleUp} size="3x" aria-label="Down Arrow" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;