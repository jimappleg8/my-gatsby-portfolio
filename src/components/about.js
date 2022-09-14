import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  
  return (
    <div>
    <main className='about'>
      <Container>
        <Row>
          <Col md={12}>
            <div className="anchor" id="about"></div>
            <h2 className="section-title text-center">A Little About Me</h2>
            <div className="break"></div>
          </Col>
        </Row>
            
        <Row>
          <Col md={1}></Col>
          <Col xs={12} md={6}>
            <p>I've been a web developer for 20+ years, and I love the constant challenge of learning new tools, techniques and technologies. I've had the opportunity to grow along with the web, learning a broad range of technologies up and down the stack.</p>
            <p>As someone who has dealt with my share of big monolithic CMSs and their infrastructure needs, I'm especially excited about the JAMStack as an architecture. I hope and expect that these modern tools and techniques will define my career going forward.</p>
            <p>Web development is more specialized now, and that's okay. I can do front-end or full-stack development or anything between. It's all about solving problems, and that's what I love to do.</p>
          </Col>
          <Col xs={10} md={4}>
            <StaticImage
              alt="Jim Applegate in Brooomfield, Coloado"
              src="../images/gravatar-square.jpg"
              className="about-photo"
            />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </main>
    
    				    <a className="section-jump text-center" href="#portfolio"><FontAwesomeIcon icon={faAngleDown} size="3x" aria-label="Down Arrow" /></a>
</div>

  );
}

export default About;