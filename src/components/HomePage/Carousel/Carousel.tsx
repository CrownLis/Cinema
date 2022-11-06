import React, { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy'
import 'swiper/css/autoplay'
import style from './Carousel.module.scss'
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getTopFilms } from "@/store/topFilms/asyncAction";
import { getTopFilmsData, getTopFilmsLoading } from "@/store/topFilms/selectors";
import { NavLink } from "react-router-dom";

const Carousel: FC = () => {

    const filter = 'TOP_250_BEST_FILMS'
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(getTopFilmsLoading)
    const films = useAppSelector(getTopFilmsData)

    useEffect(() => {
        dispatch(getTopFilms({ type: filter }))
    }, [])

    return (
        isLoading ? null :
            <div className={style.carousel} unselectable='on'>
                <Swiper
                    lazy
                    loop={true}
                    modules={[A11y, Navigation, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={50}
                    slidesPerView={5}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {films?.films.map(film =>
                        <SwiperSlide ><NavLink to={`/film/${film.filmId}`}><img className={style.poster} src={film.posterUrl} /></NavLink></SwiperSlide>
                    )}
                </Swiper>
            </div>
    )
}

export default Carousel