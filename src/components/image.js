import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticImage
    src="../images/gatsby-astronaut.png"
    width={300}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="A Gatsby astronaut"
    // style={{ marginBottom: `1.45rem` }}
  />
)

export default Image
