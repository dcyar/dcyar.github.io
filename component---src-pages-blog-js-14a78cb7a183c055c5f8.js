(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(e,a,t){"use strict";t.r(a),t.d(a,"data",(function(){return m}));var n=t(0),l=t.n(n),r=t(220),c=t(219),o=t(242),i=t(218),s=t.n(i);a.default=function(e){var a=e.data;return l.a.createElement(r.a,{config:s.a},l.a.createElement(c.a,{title:"Blog"}),l.a.createElement("div",{className:"about-container"},l.a.createElement(o.a,{data:a.posts.edges,title:"Articles",path:"/blog"})))};var m="2306204198"},242:function(e,a,t){"use strict";t(150);var n=t(0),l=t.n(n),r=t(41),c=t(221),o=t.n(c),i=t(245),s=t.n(i);a.a=function(e){var a=e.data,t=e.title,n=e.path;return l.a.createElement("div",{className:s.a.blog},l.a.createElement("h1",{className:s.a.blogTitle},t),l.a.createElement("div",{className:s.a.blogPosts},a.map((function(e,a){var t=e.node;return l.a.createElement(r.Link,{to:""+n+t.frontmatter.path,key:a,className:s.a.blogPost},l.a.createElement("figure",null,l.a.createElement(o.a,{fixed:t.frontmatter.thumbnail.childImageSharp.fixed,className:s.a.blogThumbnail,alt:t.frontmatter.title})),l.a.createElement("h2",{className:s.a.blogPostTitle},t.frontmatter.title))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-14a78cb7a183c055c5f8.js.map