import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout/layout"
import SEO from "../components/shared/seo"
import SocialShare from "../components/shared/share"

import siteConfig from "../../data/siteConfig"
import { formatDate } from "../utils/global"

import style from "./blog.module.styl"


function Blog({ data }) {
    const { markdownRemark: post } = data // data.markdownRemark holds your post data
    return (
        <Layout config={siteConfig}>
            <SEO title={post.frontmatter.title} description={post.frontmatter.description} url={siteConfig.url + post.frontmatter.path} />
            <div className={style.blogHeader}>
                <figure>
                    <Img
                        fixed={post.frontmatter.thumbnail.childImageSharp.fixed}
                        className={style.blogThumbnail}
                        alt={post.frontmatter.title}
                    />
                </figure>
                <div>
                    <h1 className={style.blogTitle}>{post.frontmatter.title}</h1>
                    <div className={style.blogMeta}>
                        <time>{formatDate(post.frontmatter.date)}</time>
                        {" / "}
                        {/* <a href="/" target="_blank" rel="noopener noreferrer">Share Facebook</a>
                        {" / "} */}
                        <span>{siteConfig.siteTitleShort}</span>
                    </div>
                    <div className={style.blogTags}>
                        {
                            post.frontmatter.tags.map((node, index) =>
                                <Link to="/" className={style.blogTag} key={index}>{node}</Link>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={style.blogBody}>
                <div
                    className={style.blogPostContent}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
            <SocialShare url={siteConfig.url + '/blog' + post.frontmatter.path} id={post.id} title={post.frontmatter.title}></SocialShare>
        </Layout>
    )
}

export default Blog

export const data = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            id
            html
            fields {
                slug
            }
            frontmatter {
                date
                title
                tags
                path
                description
                thumbnail {
                    childImageSharp {
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`