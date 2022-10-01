import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: {
        value: ''
    },
    email: {
        value: ''
    },
    password: {
        value: ''
    },
    confirmPass: {
        value: ''
    },
    page: {
        value: 1
    },
    emailValid: {
        value: true
    },
    userValid: {
        value: true
    },

}

export const regSlice = createSlice({
    name: "Register",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setUserEmail: (state, action) => {
            state.email = action.payload
        },
        setUserPassword: (state, action) => {
            state.password = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setValidEmail: (state, action) => {
            state.emailValid = action.payload
        },
        setValidUser: (state, action) => {
            state.userValid = action.payload
        },
        setConfirmPass: (state, action) => {
            state.confirmPass = action.payload
        }
    }
})

export const { setUsername, setUserEmail, setUserPassword, setPage, setValidEmail, setValidUser, setConfirmPass } = regSlice.actions

export default regSlice.reducer