import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ path }: { path: string }) => (
  <Layout path={path}>
    <SEO title="Contact" />
    <h1>Contact page</h1>
  </Layout>
)

export default ContactPage
