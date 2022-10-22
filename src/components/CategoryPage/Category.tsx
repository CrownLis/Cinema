import { getFilteredListData } from "@/store/filteredList/selectors";
import { useAppSelector } from "@/store/hooks";
import React, { FC } from "react";

import style from './Category.module.scss'

const Category: FC = () => {

    const filmList = useAppSelector(getFilteredListData)

    return (
        <div className={style.category}>
            <div className={style.category__wrapper}>
                <div className={style.wrapper__category}>
                    <input></input>
                </div>
                <div className={style.wrapper__list}>
                    {filmList?.list.map(film =>
                        <div className={style.list__film}>
                            <h3 className={style.film__title}>{film.nameRu}/{film.NameEn}</h3>
                            <img src={film.posterUrl}></img>
                            <div>
                                <p>
                                    {film.genres.map(genre => genre.genre)}
                                </p>
                                <span>{film.year}</span>
                                <span>{film.ratingImdb}/{film.ratingKinopoisk}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category