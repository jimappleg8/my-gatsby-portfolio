import * as React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const PortfolioContent = ({ node }) => {
  const { siteUrl } = useSiteMetadata();
  const myTarget = node.frontmatter.project_link.startsWith(siteUrl) ? '_self' : '_blank';

  // This is my solution to links in the front matter. The other solutions I tried all
  // failed, so this is a simple solution to a very specific need.
  const leadText = node.frontmatter.lead_text
    .replaceAll(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');

  return (
    <div className="content hero-buttons">
      <h3 className="title">{node.frontmatter.title}</h3>
      <p className="excerpt" dangerouslySetInnerHTML={{__html: leadText}} />
                  
      <Button
        href={node.frontmatter.project_link}
        target={myTarget}
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