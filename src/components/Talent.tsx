import React, { FunctionComponent } from "react"
import { IAllContentfulTalent } from "../types"
import Img from "gatsby-image"

export const Talent: FunctionComponent<IAllContentfulTalent> = ({ node }) => {
  return (
    <div className="talent__wrapper">
      <Img fluid={node.image.fluid} alt={node.name} className="talent__image" />
      <div className="talent__name__wrapper">
        <p className="talent__name">{node.name}</p>
      </div>
    </div>
  )
}
