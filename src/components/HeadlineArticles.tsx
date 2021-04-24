import React from "react"
import { ContentfulHeadlineArticle } from "../types"

export const HeadlineArticles = ({ articles }: ContentfulHeadlineArticle) => {
  console.log(articles)
  return (
    <div className="py-6 bg-gray-100 -mx-4 md:mx-0">
      <h1>Headline Articles</h1>
    </div>
  )
}
