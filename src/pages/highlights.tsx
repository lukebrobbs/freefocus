import { graphql } from "gatsby"
import React from "react"
import { Article } from "../components/Article"
import { HeadlineArticles } from "../components/HeadlineArticles"
import SEO from "../components/seo"
import { ContentfulArticleData } from "../types"

export const ARTICLE_QUERY = graphql`
  query articleQuery {
    allContentfulArticle(sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          id
          articleTitle
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          content {
            raw
          }
          cardTitle
          cardImage {
            gatsbyImageData(layout: CONSTRAINED)
          }
          spotifyLink {
            link
            linkText
          }
          shopLink {
            link
            linkText
          }
          otherLink {
            link
            linkText
          }
          contactEmail
        }
      }
    }
    contentfulHeadlineArticles(title: { eq: "Live" }) {
      articles {
        title
        articles {
          id
          articleTitle
          cardTitle
          cardImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          headlineImage {
            gatsbyImageData(layout: CONSTRAINED)
          }
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          content {
            raw
          }
          spotifyLink {
            link
            linkText
          }
          shopLink {
            link
            linkText
          }
          otherLink {
            link
            linkText
          }
          contactEmail
        }
      }
    }
  }
`
const HighlightsPage = ({ data }: { data: ContentfulArticleData }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="Highlights" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Highlights
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full mb-10" />
      <HeadlineArticles {...data.contentfulHeadlineArticles.articles} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 xs:mx-6 md:mx-0 mt-6">
        {data.allContentfulArticle.edges.map(({ node }) => (
          <Article {...node} key={node.id} />
        ))}
      </div>
    </div>
  )
}

export default HighlightsPage
