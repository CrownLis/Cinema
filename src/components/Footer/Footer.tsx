import React, { FC } from "react";

import style from './Footer.module.scss'

const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__wrapper}>
                <span className={style.footer__info}>
                    © 2022 — 2023, Cinema 18+
                </span>
                <nav className={style.footer__links}>
                    <a href='index'>Наш магазин</a>
                    <a href='index'>Наша социальная сеть</a>
                    <a href='index'>бла бла</a>
                </nav>
                <a className={style.footer__info}>Проект компании XXX</a>
            </div>
        </footer>
    )
}

export default Footer