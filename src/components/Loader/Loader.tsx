import React, { FC } from "react"

import style from './Loader.module.scss'

const Loader:FC = () => {
    return (
        <div className={style.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader