import * as React from "react"
import { ContentfulArticle } from "../types"
import Img from "gatsby-image"

export const Article = ({ cardTitle, cardImage }: ContentfulArticle) => {
  return (
    <div className="relative rounded-sm overflow-hidden">
      <Img fluid={cardImage.fluid} />
      <div className="w-full h-full absolute top-0 bg-gray-800 bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white font-bold text-3xl px-6">{cardTitle}</h3>
      </div>
    </div>
  )
}
