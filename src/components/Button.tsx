import React from 'react';
import {FilterValuesType} from "../App";

type PropsType = {
    name: string
    callBack: ()=> void
    filter: FilterValuesType
}



export const Button = (props:PropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return(
        <button className={props.name === props.filter ? "active-filter" : ""}
                onClick={onClickHandler}>{props.name}
        </button>
    )
}