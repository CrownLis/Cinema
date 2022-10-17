import React, { FC, useEffect, useState } from "react";
import Logo from '@/assets/Logo.svg'
import { useAppDispatch, useAppSelector } from "@/../store/hooks";
import { getCategories } from "@/../store/categories/asyncAction";
import Arrow from '@/assets/arrow.png'
import { getCategoriesData } from '@/../store/categories/selectors'

import style from './Sidebar.module.scss'

const Sidebar: FC = () => {

    const dispatch = useAppDispatch()
    const category = useAppSelector(getCategoriesData)

    const [isOpen, setIsOpen] = useState(false)
    const [rotate, setRotate] = useState(-90)
    const [left, setLeft] = useState(-210)
    const [border, setBorder] = useState('0 0 15px 15px')
    const [leftCategories,setLeftCategories] = useState(-200)

    const sidebarOpen = () => {
        if (isOpen) {
            setRotate(-90)
            setLeft(-210)
            setBorder('0 0 15px 15px')
        } else {
            setRotate(90)
            setLeft(0)
            setBorder('15px 15px 0 0')
        }
        setIsOpen(!isOpen)
    }

    const sideOpen = () => {
        if (isOpen) {
            setLeftCategories(-210)

        } else {
            setLeftCategories(0)
        }
        setIsOpen(!isOpen)
    }


    useEffect(() => {
        dispatch(getCategories)
    })

    return (
        <div className={style.sidebar} style={{ left: left }}>
            <div className={style.sidebar__wrapper}>
                <Logo />
                <span>Жанр</span>
                <span>Страна</span>
                <button onClick={sidebarOpen} className={style.sidebar__button} style={{ rotate: rotate + 'deg', borderRadius: border }}>
                    <img src={Arrow} />
                </button>
                <div className={style.sidebar__categories} style={{left:leftCategories}}>
                    {category?.genres.map(genre => <span>{genre.genre}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Sidebar