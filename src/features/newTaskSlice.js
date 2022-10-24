import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskName: {
        value: ''
    },

    taskSubject: {
        value: ''
    },

    deadline: {
        value: ''
    }
}

export const newTask = createSlice({
    name: "New Task",
    initialState,
    reducers: {
        setTaskName: (state, action) => {
            state.taskName = action.payload
        },
        setTaskSubject: (state, action) => {
            state.taskSubject = action.payload
        },
        setTaskDeadline: (state, action) => {
            state.deadline = action.payload
        }
    }
})

export const { setTaskName, setTaskSubject, setTaskDeadline } = newTask.actions
export default newTask.reducer
