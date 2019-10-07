import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IMainLogoQuery } from "../types"
import Img from "gatsby-image"
import { ContactForm } from "../components/ContactForm"
import { Map } from "../components/Map"

const ContactPage = ({ data }: { data: IMainLogoQuery }) => {
  return (
    <div>
      <div className="contact__container">
        <SEO title="Contact" />
        <p className="contact__header">Contact us</p>
        <div className="footer__line" />

        <div className="contact__wrapper">
          <div className="contact__logo">
            <div className="contact__image">
              <Img fluid={data.contentfulAsset.fluid} alt="Free focus Logo" />
            </div>
            <div className="contact__address">
              <p>4TH FLOOR</p>
              <p>100 GRAYS INN ROAD</p>
              <p>LONDON</p>
              <p>WC1X 8AL</p>
              <p>
                <a
                  className="footer__email"
                  href="mailto: info@freefocus.co.uk"
                  target="_blank"
                >
                  INFO@FREEFOCUS.CO.UK
                </a>
              </p>
            </div>
            <div className="contact__map__wrapper">
              <Map />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query contactQuery {
    contentfulAsset(title: { eq: "Header-Logo" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`

export default ContactPage
