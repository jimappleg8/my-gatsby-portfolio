import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioContent from './portfolio-content'
import PortfolioImage from './portfolio-image'

const PortfolioList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
            tags
            lead_text
            project_link
            button_icon
            button_text
            featured_image_alt
            featured_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `)
  
  return (
    <main id="portfolio">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="section-title text-center">Portfolio</h2>
            <div className="break"></div>

            {
            data.allMdx.nodes.map((node, i) => (
              <div key={node.id} className="content-wrap">
                <div className="anchor" id="{node.frontmatter.slug}"></div>
                {
                (i % 2 === 0) 
                  ? <Row>
                      <Col md={1}></Col>
                      <Col xs={10} md={6}>
                        <PortfolioImage node={node} />
                      </Col>
                      <Col xs={10} md={4}>
                        <PortfolioContent node={node} />
                      </Col>
                      <Col md={1}></Col>
                    </Row>
                  : <Row>
                      <Col md={1}></Col>
                      <Col xs={10} md={4}>
                        <PortfolioContent node={node} />
                      </Col>
                      <Col xs={10} md={6}>
                        <PortfolioImage node={node} />
                      </Col>
                      <Col md={1}></Col>
                    </Row>
                }
              </div>
            ))
            }
          </Col>
        </Row>
      </Container>
    </main>

  );
}

export default PortfolioList;