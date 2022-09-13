import React from 'react';
import Button from 'react-bootstrap/Button';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
		return (
			<div>
        	<div className="hero-container">
						<div className="hero-content">
							<CSSTransition
								in={true}
								appear={true}
								timeout={100}
								classNames="fadeup"
							>
								<div style={{transitionDelay: '100ms'}}>
									<h1 className="text-center">Hello. I'm Jim Applegate.</h1>
								</div>
							</CSSTransition>
							<CSSTransition
								in={true}
								appear={true}
								timeout={200}
								classNames="fadeup"
							>
								<div style={{transitionDelay: '200ms'}}>
          				<p className="text-center">I'm a full-stack web developer in Broomfield, Colorado. Currently, I'm focused on building web-based open innovation projects at World That Works.</p>
								</div>
							</CSSTransition>
							<CSSTransition
								in={true}
								appear={true}
								timeout={300}
								classNames="fadeup"
							>
								<div style={{transitionDelay: '300ms'}}>
									<div className="hero-buttons">
										<Button 
											href="https://linkedin.com/in/jimappleg8"
											variant="default"
											size="lg"
										>
											<FontAwesomeIcon icon={faLinkedin} size="lg" />LinkedIn
										</Button>
										<Button 
											href="https://github.com/jimappleg8"
											variant="default"
											size="lg"
										>
											<FontAwesomeIcon icon={faGithub} size="lg" />Github
										</Button>
										<Button 
											href="https://www.jimapplegate.com/"
											variant="default"
											size="lg"
										>
											<FontAwesomeIcon icon={faGhost} size="lg" />Website
										</Button>
									</div>
								</div>
							</CSSTransition>
						</div>
					</div>

				<a className="section-jump text-center" href="#portfolio"><FontAwesomeIcon icon={faAngleDown} size="3x" aria-label="Down Arrow" /></a>
			</div>
		);
}

export default Hero;