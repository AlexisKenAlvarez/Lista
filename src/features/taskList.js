import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: {
        value: 'simple'
    },
    dropActive: {
        value: false
    },
    list: {
        value: [{
            taskName: '',
            taskSubject: '',
            deadline: '',
            status: '',
            dateCreated: ''
        }]
    },
    finished: {
        value: [{
            taskName: '',
            taskSubject: '',
            deadline: '',
            status: '',
            dateCreated: ''
        }]
    },
    stats: {
        value: [{
            text: '',
            value: '',
            bg: ''
        }]
    },
    deleteId: {
        value: ''
    },
    action: {
        value: ''
    },
    deleteFrom: {
        value: 'active'
    },
    toggleUpdate: {
        value: true
    }
}

export const taskListSlice = createSlice({
    name: "Tasklist",
    initialState,
    reducers: {
        setView: (state, action) => {
            state.view = action.payload
        },
        setDrop: (state, action) => {
            state.dropActive = action.payload
        },
        setList: (state, action) => {
            state.list = action.payload
        },
        setFinished: (state, action) => {
            const newFinished = action.payload
            state.finished = newFinished
        },
        toDelete: (state, action) => {
            // Construct a new result array immutably and return it
            const newItems = state.list.value.filter(items => items._id !== action.payload.id)
            state.list.value = newItems
        },
        toDeleteFinish: (state, action) => {
            // Construct a new result array immutably and return it
            const newItems = state.finished.value.filter(items => items._id !== action.payload.id)
            state.finished.value = newItems
        },
        setDeleteId: (state, action) => {
            state.deleteId = action.payload
        },
        setDeleteAction: (state, action) => {
            state.action = action.payload
        },
        setDeleteFrom: (state, action) => {
            state.deleteFrom = action.payload
        },
        setToggleUpdate: (state, action) => {
            state.toggleUpdate = action.payload
        },
        setStats: (state, action) => {
            state.stats = action.payload
        }
    }
})

export const { setView, setDrop, setList, setFinished, toDelete, setDeleteId, setDeleteAction, setDeleteFrom, setToggleUpdate, toDeleteFinish, setStats } = taskListSlice.actions
export default taskListSlice.reducer