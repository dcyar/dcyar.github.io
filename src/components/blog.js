import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './blog.module.styl'

function Blog({data}) {
    console.log(data)
    return (
        <div className={style.blog}>
            <h1 className={style.blogTitle}>
                Articles
            </h1>
            <div className={style.blogPosts}>
                {
                    data.map(({node}, index) => {
                        return (
                            <Link to={`/blog/${node.fields.slug}`} key={index} className={style.blogPost}>
                                <figure>
                                    <Img
                                        fixed={node.frontmatter.thumbnail.childImageSharp.fixed} 
                                        className={style.blogThumbnail}
                                        alt={node.frontmatter.title}
                                    />
                                </figure>
                                <h2 className={style.blogPostTitle}>{ node.frontmatter.title }</h2>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog

