import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo, toggleTodo } from '../features/todo/todoSlice';

function Todos() {
    
    const todos = useSelector((state) => state.todo.todos);
    //? This component uses useSelector to read the state from the store

    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEditing = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const cancelEditing = () => {
        setEditId(null);
        setEditText('');
    };

    const saveEdit = () => {
        dispatch(editTodo({ id: editId, title: editText }));
        setEditId(null);
        setEditText('');
    };

    const deleteTodoHandler = (id) => {
        dispatch(removeTodo({ id }));
    };

    const toggleTodoHandler = (id) => {
        dispatch(toggleTodo({ id }));
    };

    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            {todos.length === 0 ? (
                <p className="text-gray-600">No todos available. Add a new task!</p>
            ) : (
                <table className="table-auto border-collapse border border-gray-500 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">#</th>
                            <th className="border border-gray-400 px-4 py-2">Task</th>
                            <th className="border border-gray-400 px-4 py-2">Completed</th>
                            <th className="border border-gray-400 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, index) => (
                            <tr key={todo.id}>
                                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {editId === todo.id ? (
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            className="border border-gray-300 px-2 py-1 rounded w-full"
                                        />
                                    ) : (
                                        todo.text
                                    )}
                                </td>
                                <td className="border border-gray-400 px-4 py-2">
                                    <button
                                        onClick={() => toggleTodoHandler(todo.id)}
                                        className={`px-4 py-2 rounded ${todo.completed ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
                                    >
                                        {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                                    </button>
                                </td>
                                <td className="border border-gray-400 px-4 py-2 space-x-2">
                                    {editId === todo.id ? (
                                        <>
                                            <button
                                                onClick={saveEdit}
                                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={cancelEditing}
                                                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => startEditing(todo)}
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteTodoHandler(todo.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Todos;
