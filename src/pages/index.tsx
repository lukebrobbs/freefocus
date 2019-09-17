import React, { FunctionComponent } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IIndexPageProps } from "../types"
import { Talent } from "../components/Talent"

const IndexPage: FunctionComponent<IIndexPageProps> = ({ data, path }) => (
  <Layout path={path}>
    <SEO title="Home" />
    <div className="index__talent__wrapper">
      {data.allContentfulTalent.edges.map(talent => {
        return <Talent {...talent} key={talent.node.id} />
      })}
    </div>
  </Layout>
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
