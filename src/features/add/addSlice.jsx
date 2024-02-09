import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json"

const initialState = data;

export const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        test: (state) => {
            state
        },
    }
})

export default addSlice.reducer;