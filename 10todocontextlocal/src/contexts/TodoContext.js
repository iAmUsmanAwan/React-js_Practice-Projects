/* eslint-disable no-unused-vars */
import {createContext, useContext} from "react"
//? useContext to use the context and createContext is used to create the context 

//? here we have created a context TodoContext
export const TodoContext = createContext({
    todos: [
        {  //? the data goes here
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],   //? the functionality goes here, which we do not write here, but boilerplate of the functionality
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

//? useTodo is a custom hook that will give us access to the context
export const useTodo = () => {
    return useContext(TodoContext)
}

//? now we can use TodoProvider instead of TodoContext.Provider
export const TodoProvider = TodoContext.Provider