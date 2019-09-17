import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ path }: { path: string }) => (
  <Layout path={path}>
    <SEO title="About" />
    <h1>About page</h1>
  </Layout>
)

export default AboutPage
