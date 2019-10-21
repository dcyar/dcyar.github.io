import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/shared/seo"
import Me from "../components/me"


import siteConfig from "../../data/siteConfig"

const MePage = () => (
    <Layout config={siteConfig} >
        <SEO title="About me" />
        <div className="about-container">
            <Me />
        </div>
    </Layout>
)

export default MePage
