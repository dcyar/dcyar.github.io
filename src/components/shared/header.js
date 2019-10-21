import React from 'react'
import { Link } from 'gatsby'
import style from './header.module.styl'

function Header({config}) {
    return (
        <header className={style.header}>
            <div className={style.nav}>
                <Link to="/" className={style.brand}>
                    <figure className={style.brandFigure}>
                        <img src={config.userAvatar} className={style.brandLogo} alt={config.siteTitleShort} />
                    </figure>
                    <h2 className={style.brandTitle}>{config.siteTitleShort}</h2>
                </Link>
                <ul className={style.headerLinks}>
                    <li className={style.headerLink}>
                        <Link to="/me" className={style.headerRoute}>Me</Link>
                    </li>
                    <li className={style.headerLink}>
                        <Link to="/blog" className={style.headerRoute}>Blog</Link>
                    </li>
                    <li className={style.headerLink}>
                        <Link to="/contact" className={style.headerRoute}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
