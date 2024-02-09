import { configureStore } from "@reduxjs/toolkit";
import addReducer from '../features/add/addSlice'

export const store = configureStore({
    reducer: {
        state: addReducer,
    }
})