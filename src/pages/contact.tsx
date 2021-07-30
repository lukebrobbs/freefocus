import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IContactPageQuery } from "../types"
import { GatsbyImage } from "gatsby-plugin-image"
import { ContactForm } from "../components/ContactForm"
import { Map } from "../components/Map"

const ContactPage = ({ data }: { data: IContactPageQuery }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        title={data.contentfulContactPage.seoTitle}
        description={data.contentfulContactPage.seoDescription.seoDescription}
      />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Contact us
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full" />

      <div className="grid grid-cols-1 gap-5 m-0 lg:my-12 lg:grid-cols-9">
        <div className=" lg:col-span-3">
          <div className="w-4/5 hidden lg:block">
            <GatsbyImage
              image={data.contentfulAsset.gatsbyImageData}
              alt="Free focus Logo"
              loading="eager"
            />
          </div>
          <address className="hidden lg:block mt-2 leading-6">
            <p className="px-2 text-2xs font-semibold">
              FIRST FLOOR <br />
              17-19 FOLEY STREET <br />
              FITZROVIA <br />
              LONDON <br />
              W1W 6DW <br />
              <a
                className="text-freefocus-secondary cursor-pointer"
                href="mailto: info@freefocus.co.uk"
                target="_blank"
              >
                INFO@FREEFOCUS.CO.UK
              </a>
            </p>
          </address>
          <div className="mt-8 my-auto h-60">
            <Map />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export const query = graphql`
  query contactQuery {
    contentfulContactPage(id: { eq: "d6b9c101-9392-5701-99d0-300361a8f81d" }) {
      id
      seoDescription {
        seoDescription
      }
      seoTitle
    }
    contentfulAsset(title: { eq: "Header-Logo" }) {
      gatsbyImageData
    }
  }
`

export default ContactPage
