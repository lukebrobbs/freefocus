import { graphql } from "gatsby"
import React, { useMemo } from "react"
import { Article } from "../components/Article"
import { HeadlineArticles } from "../components/HeadlineArticles"
import SEO from "../components/seo"
import { ContentfulArticleData } from "../types"

export const ARTICLE_QUERY = graphql`
  query articleQuery {
    contentfulHighlightsPage(
      id: { eq: "5ff07543-eb4d-541f-91ac-ab043253dd28" }
    ) {
      seoTitle
      seoDescription {
        seoDescription
      }
      highlightArticles {
        articles {
          title
          articles {
            articleTitle
            id
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
      articles {
        articleTitle
        id
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
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`
const HighlightsPage = ({
  data,
  location,
}: {
  data: ContentfulArticleData
  location: Location
}) => {
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )
  const articleParam = params.get("article")

  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        title={data.contentfulHighlightsPage.seoTitle}
        description={
          data.contentfulHighlightsPage.seoDescription.seoDescription
        }
      />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Highlights
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full mb-10" />
      <HeadlineArticles {...data.contentfulHighlightsPage.highlightArticles} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 xs:mx-6 md:mx-0 mt-6">
        {data.contentfulHighlightsPage.articles.map((node) => {
          return (
            <Article
              {...node}
              key={node.id}
              defaultOpen={articleParam ? articleParam === node.id : false}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HighlightsPage
