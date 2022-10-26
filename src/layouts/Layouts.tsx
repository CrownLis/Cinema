import React, { FC } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Layouts:FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layouts