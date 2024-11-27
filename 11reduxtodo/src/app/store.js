import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: {
        todo: todoReducer, // The 'todo' key corresponds to the slice name
    },

});

export default store;