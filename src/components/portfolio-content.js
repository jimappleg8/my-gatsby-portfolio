import * as React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const PortfolioContent = ({ node }) => {
  return (
    <div className="content hero-buttons">
      <h3 className="title">{node.frontmatter.title}</h3>
      <p className="excerpt">{node.frontmatter.lead_text}</p>
                  
      <Button
        href={node.frontmatter.project_link}
        variant="default"
				size="lg"
      >
      {(node.frontmatter.button_icon === 'faBookOpen') 
        ? <FontAwesomeIcon icon={faBookOpen} size="lg" />
        : <FontAwesomeIcon icon={faGithub} size="lg" />
      }
      {node.frontmatter.button_text}
      </Button>
                  
      <div className="tags">
      {
        node.frontmatter.tags.split(' ').map((tag) => 
          <span key={tag}>
            {tag}
          </span>
        )
      }
      </div>

    </div>
  )
}

export default PortfolioContent