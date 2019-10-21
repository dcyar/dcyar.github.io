import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/shared/seo"
import Blog from "../components/blog"


import siteConfig from "../../data/siteConfig"

const BlogPage = ({data}) => (
    <Layout config={siteConfig} >
        <SEO title="Blog" />
        <div className="about-container">
            <Blog data={data.posts.edges} />
        </div>
    </Layout>
)

export default BlogPage

export const data = graphql`
        query AllBlogPosts {
            posts: allMarkdownRemark{
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
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