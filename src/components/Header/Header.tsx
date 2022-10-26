import React, { FC } from "react";
import { NavLink } from 'react-router-dom'
import Logo from './../../assets/Logo.svg';
import Search from './../../assets/search.svg'
import Bell from './../../assets/bell.svg'
import { useMediaQuery } from 'usehooks-ts'

import style from './Header.module.scss'


const Header: FC = () => {

    const isMobile = useMediaQuery('(max-width: 565px)')

    return (
        <header className={style.header}>

            <nav className={style.header__navbar}>
                <div className={style.navbar__links}>
                    <div className={style.links__logo}>
                        <NavLink to={'/'}> <Logo /></NavLink>
                    </div>
                    <ul className={style.links__text}>
                        <li>
                            <NavLink to={'/category'}>Start</NavLink>
                        </li>
                        <li>
                            <NavLink to={'#'}>Shows</NavLink>
                        </li>
                        <li>
                            <NavLink to={'#'}>Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={'#'}>New</NavLink>
                        </li>
                        <li>
                            <NavLink to={'#'}>My List</NavLink>
                        </li>
                    </ul>
                </div>
                {!isMobile ?
                    <div className={style.navbar__buttons}>
                        <button><Search /></button>
                        <button><Bell /></button>
                    </div>
                    : <div className={style.navbar__input}>
                        <input></input>
                    </div>}

            </nav>

        </header>
    )
}

export default Header