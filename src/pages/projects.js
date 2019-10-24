import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/shared/seo"
import Post from "../components/shared/post"


import siteConfig from "../../data/siteConfig"

const ProjectPage = ({data}) => (
    <Layout config={siteConfig} >
        <SEO title="Projects" />
        <div className="about-container">
            <Post data={data.projects.edges} title="Projects" path="/project" />
        </div>
    </Layout>
)

export default ProjectPage

export const data = graphql`
        query AllProjectsPost {
            projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {group: {eq: "project"}}}){
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