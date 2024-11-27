import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

//* Firstly create a Redux store instance. This will hold the state of your application.
export const store = configureStore({
    reducer: {
        todo: todoReducer, // The 'todo' key corresponds to the slice name
    },

});

export default store;