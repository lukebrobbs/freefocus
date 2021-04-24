import React from "react"
import { Article } from "../components/Article"
import { HeadlineArticles } from "../components/HeadlineArticles"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="Highlights" />
    <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
      Highlights
    </h1>
    <div className="line mb-10" />
    <HeadlineArticles />
    <div className="grid grid-cols-3 gap-6 mt-6">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  </>
)

export default NotFoundPage
