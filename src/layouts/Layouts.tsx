import React, { FC } from "react";

import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

import style from './Layouts.module.scss'

const Layouts:FC = () => {
    return (
        <div className={style.content}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layouts