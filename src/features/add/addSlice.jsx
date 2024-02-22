import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json"

const initialState = data;

export const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        darkModeToggle: (state) => {
            if(state.darkMode === "light"){
                state.darkMode = "dark"
            } else {
                state.darkMode = "light"
            }
        },
    }
})

export const { darkModeToggle } = addSlice.actions
export default addSlice.reducer;