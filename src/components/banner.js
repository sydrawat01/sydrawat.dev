import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      workhero: file(relativePath: { eq: "remote-work.jpg" }) {
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
          <div className="main-text">Sid's Profile</div>
          <div className="main-image">
            <Img fluid={data.workhero.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
