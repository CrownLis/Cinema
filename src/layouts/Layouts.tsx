import React, { FC } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const Layouts:FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layouts