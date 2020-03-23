import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/shared/seo"
import Vcard from "../components/vcard"

import siteConfig from "../../data/siteConfig"
import Feed from "../components/feed"

const IndexPage = ({data}) => (
    <Layout config={siteConfig}>
        <SEO title="Home" />
        <Vcard />
        <Feed data={data.posts.edges} title="Latest Posts" path="/blog" />
        <Feed data={data.projects.edges} title="Latest Projects" path="/project" />
    </Layout>
)

export default IndexPage

export const data = graphql`
        query FeedProjectsAndFeedPosts {
            projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {group: {eq: "project"}}}, limit: 10){
                edges {
                    node {
                        frontmatter {
                            path
                            title
                            description
                            date
                            tags
                            thumbnail {
                                childImageSharp {
                                    fixed(width: 35, height: 35) {
                                    ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
            posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {group: {eq: "blog"}}}, limit: 10){
                edges {
                    node {
                        frontmatter {
                            path
                            title
                            description
                            date
                            tags
                            thumbnail {
                                childImageSharp {
                                    fixed(width: 35, height: 35) {
                                    ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `