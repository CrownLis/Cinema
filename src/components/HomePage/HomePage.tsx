import React, { FC } from "react";
import Carousel from "./Carousel";
import CarouselSmall from "./CarouselSmall";
import CarouselSmall2 from "./CarouselSmall2";

const HomePage:FC = () => {
    return (
        <div>
            <Carousel/>
            <CarouselSmall/>
            <CarouselSmall2/>
        </div>
    )
}

export default HomePage