import React, { FunctionComponent } from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IIndexPageProps } from "../types"
import { Talent } from "../components/Talent"

const IndexPage: FunctionComponent<IIndexPageProps> = ({ data }) => {
  data.allContentfulTalent.edges.sort((a, b) => {
    return a.node.tier - b.node.tier
  })
  return (
    <>
      <SEO title="Home" />
      <div>
        <div className="index__talent__wrapper">
          {data.allContentfulTalent.edges.map(talent => {
            return <Talent {...talent} key={talent.node.id} />
          })}
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulTalent {
      edges {
        node {
          description {
            json
          }
          contactEmail
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          name
          id
          twitterUsername
          instagramUsername
          facebookUsername
          youtubeUsername
          tier
          contactEmail
          facebookFollowerCount
        }
      }
    }
  }
`

export default IndexPage
