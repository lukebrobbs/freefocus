import { graphql } from "gatsby"
import React from "react"
import { Accordion } from "../components/Accordion"
import SEO from "../components/seo"
import { ICareersPageProps } from "../types"

const CareersPage = ({ data }: ICareersPageProps) => {
  const { title, blurb, vacancies } = data.contentfulCareers
  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="Careers" />
      <h1 className="text-xl font-semibold mb-6 uppercase text-center lg:text-left">
        Careers
      </h1>
      <div className="h-0.5 bg-freefocus-gray w-full mb-10" />
      <h2>{title}</h2>
      <p className="py-4">{blurb.blurb}</p>
      {vacancies.map((vacancy) => {
        return (
          <Accordion title={vacancy.title} key={vacancy.title}>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
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
