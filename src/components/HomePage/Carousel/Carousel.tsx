import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy'
import 'swiper/css/autoplay'
import { getPremiersData, getPremierLoading } from '../../../store/premiers/selectors'
import style from './Carousel.module.scss'
import { useAppSelector } from "../../../store/hooks";

const Carousel: FC = () => {

    const isLoading = useAppSelector(getPremierLoading)
    const films = useAppSelector(getPremiersData)

    return (
        isLoading? null:
        <div className={style.carousel}>
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
                {films?.items.map(film =>
                    <SwiperSlide ><img className={style.poster} src={film.posterUrl} /></SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Carousel