import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/Todocontext'
import { TodoForm, TodoItem } from './components'

//* here we write the functionality of the app
function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now, ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo) =>(prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id!== id))
  }

  const toggleComplete = (id) => { 
    setTodos((prev) => 
      prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  //? if we want the hook to only run in the starting of the loading then we use this, and because we dont want it to reload whenever todos is updated hence we make a new hook and leave the dependency array empty. And it will run as soon as the component will mount
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  //? when we want to add or inject a todo as soon as there is a change in the state 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
    // here we are not returning anything because useEffect is a void function, so it will not stop the previous effect from running.
  }, [todos])

  return (
    
    //? here we wrap everything around in the TodoProvider, either do it here or in main.jsx. But where ever we do, we have to add the functionalities as well. As we have added in App.jsx 
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App