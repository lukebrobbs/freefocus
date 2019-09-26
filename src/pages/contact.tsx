import React from "react"
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby"
import { IMainLogoQuery } from "../types"
import { MAIN_LOGO_QUERY } from "../components/header"
import Img from "gatsby-image"
import { ContactForm } from "../components/ContactForm"

const ContactPage = () => {
  const data = useStaticQuery<IMainLogoQuery>(MAIN_LOGO_QUERY)

  return (
    <div className="contact__container">
      <SEO title="Contact" />
      <p>Contact us</p>
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
            <p>INFO@FREEFOCUS.CO.UK</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
