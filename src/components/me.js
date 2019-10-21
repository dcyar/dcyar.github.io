import React from 'react'
// import { Link } from 'gatsby'

import style from './me.module.styl'

function Me() {
    return (
        <div className={style.me}>
            <h1 className={style.meTitle}>
                About me
            </h1>
            <div className={style.meResume}>
                <p>I am a curious person in terms of new technologies for web development, mobile, quality and human experience, I am interested in graphic design, 3D animation, video production, music lover, photography and poetry.</p>
            </div>
            <h2 className={style.meSubtitle}>
                Around the web
            </h2>
            <ul className={style.meList}>
                <li>
                    Github: {" "}
                    <a href="https://github.com/dcyar/" className={style.meLink} target="_blank" rel="noopener noreferrer">dcyar</a>
                </li>
                <li>
                    Twitter: {" "}
                    <a href="https://twitter.com/dcyar444/" className={style.meLink} target="_blank" rel="noopener noreferrer">dcyar444</a>
                </li>
            </ul>
            <h2 className={style.meSubtitle}>
                Projects
            </h2>
            <ul className={style.meList}>
                <li>
                    OREC-EX: {" "}
                    <a href="https://github.com/dcyar/orec-ex" className={style.meLink} target="_blank" rel="noopener noreferrer">orec-ex</a>
                </li>
            </ul>
            {/* <h2 className={style.meSubtitle}>
                Resume
            </h2>
            <p className={style.meText}>You can find my resume <Link to="resume" className={style.meLink}>here</Link></p> */}
            {/* <h2 className={style.meSubtitle}>
                Hobies
            </h2> */}
        </div>
    )
}

export default Me
