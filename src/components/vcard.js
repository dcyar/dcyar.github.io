import React from 'react'

import style from './vcard.module.styl'
import photo from '../images/profile.jpg'

function Vcard() {
    return (
        <div className={style.vcard}>
            <div className={style.vcardAbout}>
                <h1 className={style.vcardTitle}>Hi, I'm JhOn</h1>
                <p className={style.vcardResume}>Web developer, with knowledge in Frontend, Backend, passionate about new technologies on the internet, music lover and explorer of the limits of the unknown.</p>
                <div className={style.vcardLinks}>
                    <ul className={style.vcardLinksList}>
                        <li className={style.vcardLink}>
                            <a href="https://github.com/dcyar/" className={style.vcardRoute} target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li className={style.vcardLink}>
                            <a href="https://twitter.com/dcyar_/" className={style.vcardRoute} target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <figure className={style.vcardPhoto}>
                <img src={photo} className={style.photo} alt="" />
            </figure>
        </div>
    )
}

export default Vcard
