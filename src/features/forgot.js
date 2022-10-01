import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: {
        value: false
    }
}

export const forgotSlice = createSlice({
    name: "Forgot",
    initialState,
    reducers: {
        setSuccess: (state, action) => {
            state.success = action.payload
        }
    }
})

export const { setSuccess } = forgotSlice.actions
export default forgotSlice.reducer