import React, { FC, PropsWithChildren, useState } from "react";
import YouTube from "react-youtube";
import ReactPlayer from 'react-player/youtube'

import style from './ModalWindow.module.scss'

type modalProps = PropsWithChildren<{
    active: boolean;
    setActive:Function;
    children:any
}>;



const ModalWindow: FC<modalProps> = ({ active, setActive,children }) => {

    return (
        <div className={active? `${style.modal} ${style.active}`: `${style.modal}`} onClick={e => setActive(false)}>
            <div className={active? `${style.modal__content} ${style.active}`: `${style.modal__content}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow