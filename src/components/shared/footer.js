import React from "react"
import style from "./footer.module.styl"


function Footer({ config }) {
    return (
        <footer className={style.footer}>
            <div className={style.noticeContainer}>
                <h4>{config.copyright}</h4>

                <h4>
                    <a href="https://github.com/dcyar/" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </h4>
            </div>
        </footer>
    )
}

export default Footer;
