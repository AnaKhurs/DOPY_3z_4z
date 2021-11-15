import React, {ChangeEvent, KeyboardEvent} from 'react';

type PropsType = {
    value: string
    setTitle: (title: string) => void
    setError: (error: string | null) => void
    callBack: () => void
    error: string | null
}


export const Input = ({error, setError, setTitle, value, ...props}: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            props.callBack();
        }
    }

    return (
        <input value={value}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
    )
}