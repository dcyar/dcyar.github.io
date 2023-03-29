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
    return (
        <>
            <Helmet>
                <meta name="description" content={config.siteDescription} />
                <html lang="es" />
            </Helmet>
            
            <Header config={config}></Header>

            <div className={style.containerMessage}>
                <p>Este blog esta desactualizado, por favor visita mi nuevo blog: <a href="https://jhonachata.dev" title="Blog personal">jhonachata.dev</a></p>
            </div>

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
