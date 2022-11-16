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
    },
    confirmed: {
        value: false
    },
    request: {
        value: false
    },
    taskNameValid: {
        value: true
    },
    taskSubjectValid: {
        value: true
    },
    deadlineValid: {
        value: true
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
        },
        setConfirmed: (state, action) => {
            state.confirmed = action.payload
        },
        setRequest: (state, action) => {
            state.request = action.payload
        },
        setNameValid: (state, action) => {
            state.taskNameValid = action.payload
        },
        setSubjectValid: (state, action) => {
            state.taskSubjectValid = action.payload
        },
        setDeadlineValid: (state, action) => {
            state.deadlineValid = action.payload
        }
    }
})

export const { setTaskName, setTaskSubject, setTaskDeadline, setConfirmed, setRequest, setNameValid, setSubjectValid, setDeadlineValid } = newTask.actions
export default newTask.reducer
