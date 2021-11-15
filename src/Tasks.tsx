import React, {ChangeEvent} from 'react';
import {TaskType} from "./Todolist";

type PropsType = {
    t:TaskType
    todolistID:string
    changeTaskStatus: (taskId: string, isDone: boolean, todolistID: string) => void
    removeTask: (taskId: string, todolistID: string) => void
}


export const Tasks = ({t, todolistID,...props}:PropsType) => {
            const onClickHandler = () => props.removeTask(t.id, todolistID)
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked, todolistID);
        }

            return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                <input type="checkbox"
                       onChange={onChangeHandler}
                       checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickHandler}>x</button>
            </li>
}