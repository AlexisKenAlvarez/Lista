import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: {
        value: "dashboard"
    }
}

export const handlePage = createSlice({
    name: "MainPage",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { setPage } = handlePage.actions
export default handlePage.reducer