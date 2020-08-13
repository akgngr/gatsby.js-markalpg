import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Slideriki = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "slider/lpg-tamir-mobil.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 414, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "slider/lpg-tamir.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1265, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
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
  return <Img fluid={sources} alt="Yetkili Lpg Tamiri Özel Servisi" />
}
export default Slideriki