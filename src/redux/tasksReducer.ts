export const tasksReducer = (state: any, action: TasksReducerActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state
        }
        default:
            return state
    }
}

type TasksReducerActionType = removeTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>

const removeTaskAC = (id: string, todolistID: string) => {
    return {
        type: "REMOVE-TASK",
        id,
        todolistID
    } as const
}