import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy'
import 'swiper/css/autoplay'
import { getPremiersData, getPremierLoading } from '../../../store/premiers/selectors'
import { useAppDispatch, useAppSelector } from "../../../store/hooks";


import style from './CarouselSmall.module.scss'
import { NavLink } from "react-router-dom";
import { setFilterParameters } from "@/store/filteredList/filteredListSlice";
const CarouselSmall: FC = () => {

    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(getPremierLoading)
    const films = useAppSelector(getPremiersData)

    return (
        isLoading ? null :
            <div className={style.carousel}>
                <h2 className={style.carousel__title}>Премьеры</h2>
                <Swiper
                    className={style.swiper}
                    lazy
                    loop={true}
                    modules={[A11y, Navigation, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={10}
                    slidesPerView={11}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {films?.items.map(film =>
                        <SwiperSlide className={style.smallSlide}><NavLink to={`/film/${film.kinopoiskId}`}><img className={style.poster} src={film.posterUrl} /></NavLink></SwiperSlide>
                    )}
                </Swiper>
            </div>
    )
}

export default CarouselSmall