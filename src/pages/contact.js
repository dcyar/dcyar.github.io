import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/shared/seo"

import siteConfig from "../../data/siteConfig"
import Contact from "../components/contact";

const ContactPage = () => (
    <Layout config={siteConfig}>
        <SEO title="Stay in Touch" />
        <Contact socials={siteConfig.socials} />
    </Layout>
)

export default ContactPage
