import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../components/shared/seo'
import Post from '../components/shared/post'


import siteConfig from '../../data/siteConfig'

const BlogPage = ({data}) => (
    <Layout config={siteConfig} >
        <SEO title="Blog" />
        <div className="about-container">
            <Post data={data.posts.edges} title="Articles" path="/blog" />
        </div>
    </Layout>
)

export default BlogPage

export const data = graphql`
        query AllBlogPosts {
            posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {group: {eq: "blog"}}}){
                edges {
                    node {
                        frontmatter {
                            path
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