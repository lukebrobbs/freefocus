import { graphql } from "gatsby"
import React from "react"
import { Accordion } from "../components/Accordion"
import SEO from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { ICareersPageProps } from "../types"
import { richTextOptions } from "../styles/richTextStyles"

const CareersPage = ({ data }: ICareersPageProps) => {
  const { title, blurb, vacancies, seoTitle } = data.contentfulCareers
  return (
    <div className="max-w-4xl mx-auto">
      <SEO title={seoTitle} />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Careers
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full mb-10" />
      <h2 className="text-2xl font-semibold mb-2 uppercase">{title}</h2>
      <p className="pb-6 tracking-normal font-semibold text-sm">
        {blurb.blurb}
      </p>
      <h2 className="text-lg font-semibold mb-4 uppercase">
        Current Vacancies
      </h2>

      {vacancies.map((vacancy) => {
        return (
          <Accordion
            title={vacancy.title}
            key={vacancy.title}
            className="w-full mb-4"
          >
            <div className="flex md:justify-end items-center mt-4">
              <a
                href={`mailto: ${vacancy.applyNowLink}?subject=${vacancy.title} application`}
                target="_blank"
                className="hidden md:inline transition-all duration-100 py-1 px-8 mb-4 md:mb-0 bg-freefocus-tertiary text-white text-xs font-semibold cursor-pointer self-center lg:flex hover:bg-opacity-80"
              >
                Apply now
              </a>
            </div>
            {renderRichText(vacancy.jobDescription, richTextOptions)}
            <a
              href={`mailto: ${vacancy.applyNowLink}?subject=${vacancy.title} application`}
              target="_blank"
              className="transition-all duration-100 py-1 px-8 mb-4 md:hidden bg-freefocus-tertiary text-white text-xs font-semibold cursor-pointer self-center hover:bg-opacity-80"
            >
              Apply now
            </a>
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
      seoTitle
      blurb {
        blurb
      }
      vacancies {
        title
        applyNowLink
        jobDescription {
          raw
        }
      }
    }
  }
`

export default CareersPage
