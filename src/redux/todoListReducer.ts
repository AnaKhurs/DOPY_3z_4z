import {FilterValuesType, TodolistType} from "../App";

export const todoListReducer = (todoLists: Array<TodolistType>, action: TodoListReducerActionType) => {
    switch (action.type) {
        case "CHANGE-FILTER": {
            return (todoLists.map(tl => tl.id === action.todolistID ? {...tl, filter: action.value} : tl))
        }
        default:
            return todoLists
    }
}

type TodoListReducerActionType = changeFilterACType

type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType, todolistID: string) => {
    return {
        type: "CHANGE-FILTER",
        value,
        todolistID
    } as const
}