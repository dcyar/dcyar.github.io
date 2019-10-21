import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/shared/seo"

import siteConfig from "../../data/siteConfig"

const NotFoundPage = () => (
  <Layout config={siteConfig}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
