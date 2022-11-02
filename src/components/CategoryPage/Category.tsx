import { getCategories } from "@/store/categories/asyncAction";
import { getFilteredList } from "@/store/filteredList/asyncAction";
import { setCurrentPage } from "@/store/filteredList/filteredListSlice";
import { getFilteredListData, getFilteredListLoading, getFilteredListPage, getFilterParameters } from "@/store/filteredList/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Loader";
import Sidebar from "../Sidebar";

import style from './Category.module.scss'

const Category: FC = () => {

    const dispatch = useAppDispatch()
    const filmList = useAppSelector(getFilteredListData)
    const loading = useAppSelector(getFilteredListLoading)
    const currentPage = useAppSelector(getFilteredListPage)
    const filterParams = useAppSelector(getFilterParameters)
    const itemsOnPage = 400 / 20
    const pages: number[] = []


    const generatePagination = (pages: number[], pagesCount: number, currentPage: number) => {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }

    generatePagination(pages, itemsOnPage, currentPage)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
        dispatch(getFilteredList({ ...filterParams, page: currentPage }))
    }, [currentPage])

    return (
        loading ? <Loader/> :
            <div className={style.category}>
                <Sidebar />
                <div className={`${style.category__wrapper} row gy-3`}>
                    {filmList?.items.map(item => <div className={`col-xl-3 col-lg-4 col-md-6 col-sm-12`}>
                        <NavLink to={`/film/${item.kinopoiskId}`}>
                            <div className={style.wrapper__item}>
                                <div className={style.item__image}>
                                    <img src={item.posterUrl}></img>
                                </div>
                                <div className={style.item__title}>
                                    <h3>{item.nameRu}</h3>
                                </div>
                            </div>
                        </NavLink>
                    </div>)}
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {pages.map((page, index) => <button className={currentPage == page ? `${style.active}` : ''}><li className={`${style.page} page-link`} onClick={e => dispatch(setCurrentPage(page))}>{page}</li></button>)}
                    </ul>
                </nav>
            </div>
    )
}

export default Category