/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark')
    {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}


exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog.js`)

    const result = await graphql(`
        query {
            allMarkdownRemark{
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/blog${node.frontmatter.path}`,
            // path: `/blog/${node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug
            }, // additional data can be passed via context
        })
    })
}