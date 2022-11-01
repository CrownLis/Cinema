import { getFilmInfo } from "@/store/filmInfo/asyncAction";
import { getFilmInfoData, getFilmInfoLoading, getFilteredFilms } from "@/store/filmInfo/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalWindow from "../ModalWindow";
import Preview from '@/assets/trailer.png'

import style from './FilmInfo.module.scss'
import ReactPlayer from "react-player";

const FilmInfo: FC = () => {

    const dispatch = useAppDispatch()
    const Loading = useAppSelector(getFilmInfoLoading)
    const data = useAppSelector(getFilmInfoData)
    const filteredFilms = useAppSelector(getFilteredFilms)
    const { id } = useParams();
    const [activeModal, setActiveModal] = useState(false)
    const [source, setSource] = useState('')

    const showTrailer = (src: string) => {
        setSource(src)
        activeModal ? setActiveModal(false) : setActiveModal(true)
    }

    useEffect(() => {
        dispatch(getFilmInfo(Number(id)))
    }, [id])

    return (
        Loading ? null :
            <div className={style.film}>
                <div className={style.film__wrapper}>
                    <h3 className={style.film__title}>{data?.info.nameRu}</h3>
                    <div className={style.film__content}>
                        <div className={style.film__poster}>
                            <img src={data?.info.posterUrl} alt={data?.info.nameRu} />
                            {data?.trailers.items.length ?
                                <div className={style.film__trailers}>
                                    {filteredFilms?.map(item => <img src={Preview} className={style.film__trailer} onClick={e => showTrailer(item.url)} />)}
                                    <ModalWindow setActive={setActiveModal} active={activeModal}>
                                    <ReactPlayer url={source} controls={true} />
                                    </ModalWindow>
                                </div> : null}
                        </div>
                        <div className={style.film__info}>
                            <h3>О сериале:</h3>
                            <span>Год выпуска: {data?.info.year}</span>
                            <span>Жанр: {data?.info.genres.map((genre, index) => data.info.genres.length - 1 === index ? `${genre.genre}` : `${genre.genre},`)}</span>
                            <span>Тип: {data?.info.type} </span>
                            <span>Количество серий: {data?.seasons?.items.length ? data?.seasons?.items[0].episodes.length : 1}</span>
                            <span>Количество сезонов: {data?.seasons?.total ? data?.seasons.total : 1}</span>
                            <span>Рейтинг от критиков: {data?.info.ratingFilmCritics}/{data?.info.ratingFilmCriticsVoteCount}</span>
                            <span>Рейтинг от пользователей: {data?.info.ratingAwait}/{data?.info.ratingAwaitCount}</span>
                            <span>Страны: {data?.info.countries.map(country => country.country)}</span>
                            <span>Длительность: {data?.info.filmLength ? data?.info.filmLength : NaN} мин</span>
                            <span>Описание: {data?.info.description}</span>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default FilmInfo