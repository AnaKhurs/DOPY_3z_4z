import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Tasks} from "./Tasks";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistID: string) => void
    changeFilter: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistID: string) => void
    filter: FilterValuesType
    id: string
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.id);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }



    const onClickHandler = (value:FilterValuesType) => {
        props.changeFilter(value, props.id)
    }


    let tasksForTodolist = props.tasks;

    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input value={title} setTitle={setTitle} setError={setError} callBack={addTask} error={error}/>
{/*            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />*/}
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                tasksForTodolist.map(t => {
                        return (
                            <Tasks key={t.id}
                                   t={t}
                                   todolistID={props.id}
                                   removeTask={props.removeTask}
                                   changeTaskStatus={props.changeTaskStatus}/>
                        )
                    }
                )
            }
        </ul>
        <div>
            <Button name={"all"} filter={props.filter} callBack={()=>onClickHandler('all')}/>
            <Button name={"active"} filter={props.filter} callBack={()=>onClickHandler('active')}/>
            <Button name={"completed"} filter={props.filter} callBack={()=>onClickHandler('completed')}/>
        </div>
    </div>
}
