import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Gatsby</div>
          <div className="main-image">
            <Img fluid={data.hero.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
