import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"



const Sliderbir = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "slider/lpg-montaj-mobil.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 414, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      desktopImage: file(relativePath: { eq: "slider/lpg-montaj-web.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1265, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 625px)`,
    },
  ]
  return <Img fluid={sources} alt="Illustrated Monica" />
}
export default Sliderbir