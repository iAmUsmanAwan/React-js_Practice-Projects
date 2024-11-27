//* help us to create big object, which we actually export as well. And it also keeps record of initial state of the store as well as all our reducers are collected here.

//? This is the third step to define the functionalities of the app

import { createSlice, nanoid, combineReducers } from '@reduxjs/toolkit';

//? This is the Initial State which will be the first task 
const initialState = {
    todos: [{id: 1, text: 'Task 1'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //? here 4 reducers are declared i.e. addTodo, removeTodo, toggleTodo and editTodo
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),     //? Generate unique ID
                text: action.payload,
                completed: false,     //? Set default completed status

            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload.id)
        },
        toggleTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
    state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: title } : todo
            )
        }
    }
})

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions
//? also export these individual methods, so that whereever dispatch is used they will be useful

export default todoSlice.reducer
//? export our reducer which will be used in store