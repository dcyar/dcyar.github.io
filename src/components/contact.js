import React from 'react'

import style from './contact.module.styl'

function Contact({socials}) {
    return (
        <div className={style.contact}>
            <h1 className={style.contactTitle}>Stay in Touch</h1>
            <p>You can also find me around the web.</p>
            <ul>
                {
                    socials.map((social, index) => {
                        return (
                            <li key={index} className={style.contactList}>
                                {social.name}: <a href={social.url} className={style.contactLink}>{social.user}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Contact
