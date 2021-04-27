import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IAboutPageData } from "../types"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"
import { InstaFeed } from "../components/InstaFeed"

const AboutPage = ({ data }: { data: IAboutPageData }) => {
  const {
    pageHeader,
    description,
    twitterUsername,
    instagramUsername,
  } = data.allContentfulAbout.edges[0].node
  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="About" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        {pageHeader}
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full" />
      <div className="text-freefocus-blue grid lg:grid-cols-2 gap-4 text-sm font-medium py-6 lg:py-16">
        <div className="w-full lg:w-3/4 text-xs lg:text-sm lg:leading-relaxed tracking-normal">
          {renderRichText(description)}
        </div>
        <InstaFeed />
        <div className="text-center pt-4 flex lg:justify-start h-10">
          <a
            className="mr-2 lg:mr-1"
            href={`https://www.instagram.com/${instagramUsername}`}
            target="_blank"
          >
            <img src={Instagram} alt="Instagram Logo" className="h-full mr-8" />
          </a>
          <a
            className="mr-2 lg:mr-1"
            href={`https://www.twitter.com/${twitterUsername}`}
            target="_blank"
          >
            <img src={Twitter} alt="Twitter Logo" className="h-full mr-8" />
          </a>
          <p className="mt-2 lg:mt-0 self-center">{`@${twitterUsername}`}</p>
        </div>
        <form
          action={`https://www.instagram.com/${instagramUsername}`}
          target="_blank"
          className="hidden lg:flex"
        >
          <button className="transition-all duration-100 mx py-1 px-8 mt-2 bg-freefocus-tertiary text-white text-xs font-semibold cursor-pointer self-center hidden lg:flex mx-auto hover:bg-opacity-80">
            FOLLOW US
          </button>
        </form>
      </div>
    </div>
  )
}

export const query = graphql`
  query aboutQuery {
    allContentfulAbout(limit: 1) {
      edges {
        node {
          pageHeader
          description {
            raw
          }
          instagramUsername
          twitterUsername
        }
      }
    }
  }
`

export default AboutPage
