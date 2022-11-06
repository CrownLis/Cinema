import React, { FC, useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from './../../assets/Logo.svg';
import Search from './../../assets/search.svg'
import Bell from './../../assets/bell.svg'
import { useMediaQuery } from 'usehooks-ts'

import style from './Header.module.scss'
import { useAppDispatch } from "@/store/hooks";
import { Field, Form } from "react-final-form";
import { setFilterParameters } from "@/store/filteredList/filteredListSlice";


const Header: FC = () => {

    const showInput = () => {
        scale === 0 && width === 0 ? (setScale(1), setWidth(220), setScaleButton(0)) : (setScale(0), setWidth(0), setScaleButton(1))
    }
    const [scale, setScale] = useState(0)
    const [scaleButton, setScaleButton] = useState(1)
    const [width, setWidth] = useState(0)
    const isMobile = useMediaQuery('(max-width: 565px)')
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const [keyword, setKeyword] = useState('')

    const SubmitSearch = () => {
        dispatch(setFilterParameters({keyword}))
        navigation('/category')
    }

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
                        <Form
                            onSubmit={SubmitSearch}
                            render={({ handleSubmit, form, submitting, pristine }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="keyword"
                                        type="text">
                                        {props => (
                                            <input type='text' style={{ width: width, transform: `scale(${scale})` }} onChange={e => setKeyword(e.currentTarget.value)} onBlur={e => showInput()} />
                                        )}
                                    </Field>

                                </form>)}
                        />
                        <button onClick={e => showInput()} style={{ transform: `scale(${scaleButton})` }}><Search /></button>
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