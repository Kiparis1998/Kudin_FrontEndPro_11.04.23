import './Emoji.css';
import {useState} from "react";

export const Emoji = ({styleView, src, incrementHandler, counter}) =>  {
    return (
        <div className={`Emoji-container ${styleView === true && 'Emoji-opacity'}`} >
            <img src={src} onClick={incrementHandler}/>
            <p className='Emoji-counter'>{counter}</p>
        </div>
    )
}