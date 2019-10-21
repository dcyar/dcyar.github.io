import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/shared/seo"
import Vcard from "../components/vcard"

import siteConfig from "../../data/siteConfig"

const IndexPage = () => (
    <Layout config={siteConfig}>
        <SEO title="Home" />
        <Vcard/>
    </Layout>
)

export default IndexPage
