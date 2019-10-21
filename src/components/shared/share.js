import React from 'react'
import { FacebookProvider, ShareButton, Comments } from 'react-facebook'

import style from './share.module.styl'

function SocialShare({url}) {
    return (
        <div className={style.niceDay}>
            <p>You have a <span>good day!!</span></p>

            {/* <div data-href={window.location.url} data-layout="button" data-size="large">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdcyar.github.io%2F&amp;src=sdkpreparse" className={style.fbShareBtn}>Share on Facebook</a>
            </div> */}
            <FacebookProvider appId="1200199847034329">
                <ShareButton href={url} className={style.fbShareBtn}>
                    Share on Facebook
                </ShareButton>
                <Comments href={url} width="100%" numPost="5" />
            </FacebookProvider>

            {/* <div>
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default SocialShare
