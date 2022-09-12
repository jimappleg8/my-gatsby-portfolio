import * as React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioImage = ({ node }) => {
  const image = getImage(node.frontmatter.featured_image)

  return (
    <div>
    <GatsbyImage 
      image={image} 
      alt={node.frontmatter.title}
      className="project-image"
    />
    </div>
  )
}

export default PortfolioImage