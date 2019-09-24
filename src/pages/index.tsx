import React, { FunctionComponent } from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IIndexPageProps } from "../types"
import { Talent } from "../components/Talent"

const IndexPage: FunctionComponent<IIndexPageProps> = ({ data }) => (
  <>
    <SEO title="Home" />
    <div className="index__talent__wrapper">
      {data.allContentfulTalent.edges.map(talent => {
        return <Talent {...talent} key={talent.node.id} />
      })}
    </div>
  </>
)

export const query = graphql`
  query indexQuery {
    allContentfulTalent {
      edges {
        node {
          description {
            content {
              content {
                value
              }
            }
          }
          contactEmail
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          name
          id
        }
      }
    }
  }
`

export default IndexPage
