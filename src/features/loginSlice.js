import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: {
        value: ''
    },
    password: {
        value: ''
    },

}

export const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {

        setUserEmail: (state, action) => {
            state.email = action.payload
        },
        setUserPassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { setUserEmail, setUserPassword } = loginSlice.actions

export default loginSlice.reducer