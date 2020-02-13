import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useEffect,
} from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IIndexPageProps } from "../types"
import { Talent } from "../components/Talent"
import shuffle from "lodash.shuffle"

const IndexPage: FunctionComponent<IIndexPageProps> = props => {
  const params = useMemo(() => new URLSearchParams(props.location.search), [
    props.location.search,
  ])
  const talentParam = params.get("talent")

  const sortedArr = useCallback(
    shuffle(props.data.allContentfulTalent.edges).sort((a, b) => {
      return a.node.tier - b.node.tier
    }),
    []
  )

  return (
    <>
      <SEO title="Home" />
      <div>
        <div className="index__talent__wrapper">
          {sortedArr.map(talent => {
            return (
              <Talent
                {...talent}
                defaultOpen={
                  talentParam
                    ? talentParam.toLowerCase().trim() ===
                      talent.node.name.toLowerCase().trim()
                    : false
                }
                key={talent.node.id}
              />
            )
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
          tikTokUsername
          tier
          contactEmail
          facebookFollowerCount
          tikTokFollowerCount
        }
      }
    }
  }
`

export default IndexPage
