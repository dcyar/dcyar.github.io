import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import style from './share.module.styl'

function SocialShare({url, id, title}) {
    let disqusConfig = {
        url: url,
        identifier: id,
        title: title
    }
    return (
        <div className={style.niceDay}>
            <p>You have a <span>good day!!</span></p>

            <p className={style.noticeInfo}>Estamos teniendo problemas con el boton de compartir en facebook, por favor hacerlo manualmente, GRACIAS.</p>

            
            <Disqus config={disqusConfig} />
        </div>
    )
}

export default SocialShare
