import React, { FC, useEffect, useRef, useState } from "react";
import Logo from './../../assets/Logo.svg'
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import Arrow from './../../assets/arrow.png'
import { getCategoriesData } from '@/store/categories/selectors'
import { Form, Field } from 'react-final-form'

import style from './Sidebar.module.scss'
import { getFilteredList } from "@/store/filteredList/asyncAction";
import { setCurrentPage, setFilterParameters } from "@/store/filteredList/filteredListSlice";

const Sidebar: FC = () => {

    const dispatch = useAppDispatch()
    const category = useAppSelector(getCategoriesData)
    const [isOpen, setIsOpen] = useState(`${style.sidebar__close}`)
    const [openSidebar, setOpenSidebar] = useState(false)

    const onSubmit = async (value: { countries: number, genres: number, ratingFrom: number, ratingTo: number, yearFrom: number, yearTo: number }) => {
        dispatch(setCurrentPage(1))
        dispatch(setFilterParameters(value))
        dispatch(getFilteredList(value))
    }

    const sidebarOpen = () => {
        if (openSidebar) {
            setIsOpen(`${style.sidebar__close}`)
            setOpenSidebar(!openSidebar)
        } else {
            setIsOpen(``)
            setOpenSidebar(!openSidebar)
        }
    }

    return (
        <div className={`${style.sidebar} ${isOpen}`}>
            <div className={style.sidebar__wrapper}>
                <Logo />
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine }) => (
                        <form onSubmit={handleSubmit} className={style.sidebar__form}>
                            <div className={style.form__country}>
                                <label>Страна</label>
                                <Field
                                    name="countries"
                                    component="select"
                                >
                                    <option>

                                    </option>
                                    {category?.countries.map(country => <option value={country.id}>{country.country}</option>)}
                                </Field>
                            </div>
                            <div className={style.form__genre}>
                                <label>Жанр</label>
                                <Field
                                    name="genres"
                                    component="select"
                                >
                                    <option>

                                    </option>
                                    {category?.genres.map(genre => <option value={genre.id}>{genre.genre}</option>)}
                                </Field>
                            </div>
                            <div className={style.form__sort}>
                                <label>Сортировка</label>
                                <Field
                                    name="sorted"
                                    component="select"
                                >
                                    <option>
                                        Рейтинг
                                    </option>
                                    <option>
                                        Количество оценок
                                    </option>
                                    <option>
                                        Год
                                    </option>
                                </Field>
                            </div>
                            <div className={style.form__year}>
                                <label>Год</label><br />
                                <Field name="yearFrom" component="input" defaultValue={1000} /><span>-</span>
                                <Field name="yearTo" component="input" defaultValue={3000} />
                            </div>
                            <div className={style.form__rating}>
                                <label>Рейтинг</label><br />
                                <Field name="ratingFrom" component="input" defaultValue={0} /><span>-</span>
                                <Field name="ratingTo" component="input" defaultValue={10} />
                            </div>
                            <div className={style.form__button}>
                                <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                </button>
                                <button
                                    type="button"

                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    )}
                />
                <button onClick={sidebarOpen} className={style.sidebar__button}>
                    <img src={Arrow} />
                </button>
            </div>
        </div>

    )
}

export default Sidebar