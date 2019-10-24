const siteConfig = require('./data/siteConfig');

module.exports = {
    siteMetadata: {
        title: siteConfig.siteTitle,
        description: siteConfig.siteDescription,
        author: siteConfig.siteAuthor,
    },
    plugins: [
        `gatsby-plugin-stylus`,
        `gatsby-plugin-catch-links`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `limelight`,
                    `Monserrat\:400, 700`,
                    `Inconsolata\:400,700` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/content`,
                ignore: [`**/\.*`]
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
            plugins: [
                {
                resolve: `gatsby-remark-images`,
                options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 1280,
                    quality: 85,
                },
                },
            ],
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `dcyar`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}