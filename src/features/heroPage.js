import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: {
        value: "dashboard"
    },
    slide: {
        value: false
    }
}

export const handlePage = createSlice({
    name: "MainPage",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setSlide: (state, action) => {
            state.slide = action.payload
        }
    }
})

export const { setPage, setSlide } = handlePage.actions
export default handlePage.reducer