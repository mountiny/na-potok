import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Image({filename, ...rest}) {
  return (
    <StaticQuery 
      query={
        graphql`{
          images: allFile(
            filter: {
                extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            }
          ) {
            edges {
              node {
                relativePath
                name
                base
                childImageSharp {
                  fluid(maxWidth: 2560, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    # ...GatsbyImageSharpFluidLimitPresentatio nSize
                  }
                }
              }
            }
          }
        }
      `}
      //...GatsbyImageSharpFluid_withWebp_tracedSVG
                    // srcSet
                    // src
                    // srcWebp
                    // base64
                    // originalImg
                    // originalName
                    // presentationHeight
                    // presentationWidth
                    // sizes
                    // srcSetWebp
                    // tracedSVG
                    // aspectRatio
      render={(data) => {

        const images  = data.images.edges.map(node => node.node)
        const image = images.filter(img => img.name === filename)[0]

        return (
          <Img 
            fluid={image.childImageSharp.fluid}
            alt={image.base.split(".")[0]}
            loading={"eager"}
            {...rest}
          />
        )
      }}
    />
  )
}