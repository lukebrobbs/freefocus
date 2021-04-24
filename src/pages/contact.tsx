import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IMainLogoQuery } from "../types"
import { GatsbyImage } from "gatsby-plugin-image"
import { ContactForm } from "../components/ContactForm"
import { Map } from "../components/Map"

const ContactPage = ({ data }: { data: IMainLogoQuery }) => {
  return (
    <>
      <SEO title="Contact" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Contact us
      </h1>
      <div className="line" />

      <div className="contact__wrapper">
        <div className="contact__logo">
          <div className="contact__image">
            <GatsbyImage
              image={data.contentfulAsset.gatsbyImageData}
              alt="Free focus Logo"
              loading="eager"
            />
          </div>
          <address className="contact__address">
            <p>FIRST FLOOR</p>
            <p>17-19 FOLEY STREET</p>
            <p>FITZROVIA</p>
            <p>LONDON</p>
            <p>W1W 6DW</p>
            <p>
              <a
                className="footer__email"
                href="mailto: info@freefocus.co.uk"
                target="_blank"
              >
                INFO@FREEFOCUS.CO.UK
              </a>
            </p>
          </address>
          <div className="contact__map__wrapper">
            <Map />
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  )
}

export const query = graphql`
  query contactQuery {
    contentfulAsset(title: { eq: "Header-Logo" }) {
      gatsbyImageData
    }
  }
`

export default ContactPage
