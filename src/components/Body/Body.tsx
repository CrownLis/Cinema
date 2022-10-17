import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";

const Body: FC = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </main>
    )
}

export default Body