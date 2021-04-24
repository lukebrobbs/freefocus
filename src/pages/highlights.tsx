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
          cardTitle
          cardImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    contentfulHeadlineArticles(title: { eq: "Live" }) {
      articles {
        title
        articles {
          id
          cardTitle
          cardImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const HighlightsPage = ({ data }: { data: ContentfulArticleData }) => {
  return (
    <>
      <SEO title="Highlights" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Highlights
      </h1>
      <div className="line mb-10" />
      <HeadlineArticles {...data.contentfulHeadlineArticles.articles} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.allContentfulArticle.edges.map(({ node }) => (
          <Article {...node} key={node.id} />
        ))}
      </div>
    </>
  )
}

export default HighlightsPage
