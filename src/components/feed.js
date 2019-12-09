import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './feed.module.styl'

const Feed = ({data, title, path}) => (
    <div className={style.blog}>
        <h1 className={style.blogTitle}>
            { title }
        </h1>
        <div className={style.blogPosts}>
            {
                data.map(({node}, index) => {
                    return (
                        <Link to={`${path}${node.frontmatter.path}`} key={index} className={style.blogPost}>
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

export default Feed
