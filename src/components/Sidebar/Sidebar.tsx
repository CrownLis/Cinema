import React, { FC, useEffect, useRef, useState } from "react";
import Logo from './../../assets/Logo.svg'
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import { getCategories } from "@/store/categories/asyncAction";
import Arrow from './../../assets/arrow.png'
import { getCategoriesData } from '@/store/categories/selectors'

import style from './Sidebar.module.scss'
import { NavLink } from "react-router-dom";
import { getFilteredList } from "@/store/filteredList/asyncAction";

const Sidebar: FC = () => {

    const dispatch = useAppDispatch()
    const category = useAppSelector(getCategoriesData)

    const [isOpen, setIsOpen] = useState(false)
    const [rotate, setRotate] = useState(-90)
    const [left, setLeft] = useState(-210)
    const [border, setBorder] = useState('0 0 15px 15px')
    const [Categories, setCategories] = useState(0)
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const [filter, setFilter] = useState('')

    const Cr = (countries:number,genres:number,order:string,type:string,ratingFrom:number,ratingTo:number,yearFrom:number,yearTo:number,page:number) => {
        dispatch(getFilteredList({countries,genres,order,type,ratingFrom,ratingTo,yearFrom,yearTo,page}))
    }

    const sidebarOpen = () => {
        if (isOpen) {
            setRotate(-90)
            setLeft(-210)
            setCategories(0)
            setCategoriesOpen(false)
            setBorder('0 0 15px 15px')
        } else {
            setRotate(90)
            setLeft(0)
            setBorder('15px 15px 0 0')
        }
        setIsOpen(!isOpen)
    }

    const sideOpen = (a: string | null) => {
        if (a) {
            setFilter(a)
        }
        if (categoriesOpen) {
            setCategories(0)
        } else {
            setCategories(-180)
        }
        setCategoriesOpen(!categoriesOpen)
    }


    useEffect(() => {
        dispatch(getCategories)
    })

    return (
        <div className={style.sidebar} style={{ left: left }}>
            <div className={style.sidebar__wrapper}>
                <Logo />
                <span onClick={e => sideOpen(e.currentTarget.textContent)}>Жанр</span>
                <span onClick={e => sideOpen(e.currentTarget.textContent)}>Страна</span>
                <div className={style.sidebar__categories} style={{ right: Categories }}>
                    <div className={style.categories__wrapper}>
                        {filter === 'Жанр' ? category?.genres.map(genre => <NavLink to='/category' onClick={e => Cr(genre.id,'RATING','ALL',0,10,1000,3000,1)}> {genre.genre}</NavLink>) :
                            category?.countries.map(genre => <NavLink to='/category' onClick={e => Cr(genre.id,'RATING','ALL',0,10,1000,3000,1)}>{genre.country}</NavLink>)
                        }
                        <button onClick={sidebarOpen} className={style.sidebar__button} style={{ rotate: rotate + 'deg', borderRadius: border }}>
                            <img src={Arrow} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar