import { graphql } from "gatsby"
import React from "react"
import { Accordion } from "../components/Accordion"
import SEO from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { ICareersPageProps } from "../types"
import { richTextOptions } from "../styles/richTextStyles"

const CareersPage = ({ data }: ICareersPageProps) => {
  const { title, blurb, vacancies } = data.contentfulCareers
  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="Careers" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Careers
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full mb-10" />
      <h2 className="text-2xl font-semibold mb-2 uppercase">{title}</h2>
      <p className="py-4 tracking-normal font-semibold text-sm">
        {blurb.blurb}
      </p>
      {vacancies.map((vacancy) => {
        return (
          <Accordion title={vacancy.title} key={vacancy.title}>
            <div className="flex md:justify-end items-center mb-6">
              <button className="transition-all duration-100 py-1 px-8 bg-freefocus-tertiary text-white text-xs font-semibold cursor-pointer self-center lg:flex hover:bg-opacity-80">
                Apply now
              </button>
            </div>
            {renderRichText(vacancy.jobDescription, richTextOptions)}
          </Accordion>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query careersQuery {
    contentfulCareers(id: { eq: "0a0d8b9f-6751-50e1-844e-c453e5663120" }) {
      title
      blurb {
        blurb
      }
      vacancies {
        title
        jobDescription {
          raw
        }
      }
    }
  }
`

export default CareersPage
