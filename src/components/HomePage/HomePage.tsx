import { useAppDispatch } from "@/store/hooks";
import { getPremiers } from "@/store/premiers/asyncAction";
import React, { FC, useEffect } from "react";
import Carousel from "./Carousel";
import CarouselSmall from "./CarouselSmall";
import CarouselSmall2 from "./CarouselSmall2";

const HomePage:FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPremiers([2022, 'APRIL']))
    },[])

    return (
        <div>
            <Carousel/>
            <CarouselSmall/>
            <CarouselSmall2/>
        </div>
    )
}

export default HomePage