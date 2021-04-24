import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
    <>
      <SEO title="About" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        {pageHeader}
      </h1>
      <p className="about__header"></p>
      <div className="line" />
      <div className="about__wrapper">
        <div className="about__description__wrapper">
          {documentToReactComponents(description.json)}
        </div>
        <InstaFeed />
        <div className="about__social__wrapper">
          <a
            className="social__image"
            href={`https://www.instagram.com/${instagramUsername}`}
            target="_blank"
          >
            <img
              src={Instagram}
              alt="Instagram Logo"
              className="social__image"
              style={{ marginRight: "2em" }}
            />
          </a>
          <a
            className="social__image"
            href={`https://www.twitter.com/${twitterUsername}`}
            target="_blank"
          >
            <img
              src={Twitter}
              alt="Twitter Logo"
              className="social__image"
              style={{ marginRight: "2em" }}
            />
          </a>
          <p className="social__acount__text">{`@${twitterUsername}`}</p>
        </div>
        <form
          action={`https://www.instagram.com/${instagramUsername}`}
          target="_blank"
          className="follow__button"
        >
          <button
            className="site__button follow__button"
            style={{ margin: "auto" }}
          >
            FOLLOW US
          </button>
        </form>
      </div>
    </>
  )
}

export const query = graphql`
  query aboutQuery {
    allContentfulAbout(limit: 1) {
      edges {
        node {
          pageHeader
          description {
            json
          }
          instagramUsername
          twitterUsername
        }
      }
    }
  }
`

export default AboutPage
