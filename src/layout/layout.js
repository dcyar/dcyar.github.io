/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/shared/header"
import Footer from "../components/shared/footer"

import style from  "./layout.module.styl"

const Layout = ({ children, config }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //     site {
    //         siteMetadata {
    //         title
    //         }
    //     }
    //     }
    // `)

    return (
        <>
            <Helmet>
                <meta name="description" content={config.siteDescription} />
                <html lang="es" />
            </Helmet>
            {/* <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v4.0&appId=905581629575359&autoLogAppEvents=1"></script> */}
            
            <Header config={config}></Header>
            <div className={style.container}>
                <div className={style.content}>
                    {children}
                </div>
            </div>
            
            <Footer config={config} />
        </>
    )
}

export default Layout
