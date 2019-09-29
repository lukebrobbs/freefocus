import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IAboutPageData } from "../types"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"

const AboutPage = ({ data }: { data: IAboutPageData }) => {
  const {
    pageHeader,
    description,
    twitterUsername,
    instagramUsername,
  } = data.allContentfulAbout.edges[0].node
  return (
    <div>
      <div className="about__container">
        <SEO title="About" />
        <p className="about__header">{pageHeader}</p>
        <div className="footer__line" />
        <div className="about__wrapper">
          <div className="about__description__wrapper">
            {documentToReactComponents(description.json)}
          </div>
          <div>Insta feed</div>
          <div className="about__social__wrapper">
            <img
              src={Instagram}
              alt="Instagram Logo"
              className="social__image"
              style={{ marginRight: "2em" }}
            />
            <img
              src={Twitter}
              alt="Twitter Logo"
              className="social__image"
              style={{ marginRight: "2em" }}
            />
            <p className="social__acount__text">{`@${twitterUsername}`}</p>
          </div>
          <form
            action={`https://www.instagram.com/${instagramUsername}`}
            target="_blank"
          >
            <button className="site__button">FOLLOW US</button>
          </form>
        </div>
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
