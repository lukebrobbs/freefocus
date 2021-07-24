import React, { FunctionComponent, useCallback, useMemo } from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IAllContentfulTalent, IIndexPageProps } from "../types"
import { Talent } from "../components/Talent"
//@ts-expect-error
import shuffle from "lodash.shuffle"

const IndexPage: FunctionComponent<IIndexPageProps> = (props) => {
  const params = useMemo(() => new URLSearchParams(props.location.search), [
    props.location.search,
  ])
  const talentParam = params.get("talent")

  const sortedArr = useCallback(
    shuffle(props.data.allContentfulTalent.edges).sort((a: any, b: any) => {
      return a.node.tier - b.node.tier
    }),
    []
  )

  return (
    <>
      <SEO title="Home" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-talent gap-5">
          {sortedArr.map((talent: IAllContentfulTalent) => {
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
            raw
          }
          contactEmail
          image {
            gatsbyImageData(layout: CONSTRAINED)
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
          instagramFollowerCount
          blogPostLink
        }
      }
    }
  }
`

export default IndexPage
