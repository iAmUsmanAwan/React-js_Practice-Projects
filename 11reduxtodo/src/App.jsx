import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 rounded">
      Hello People, Here you can manage the tasks that you want to do 
      </h1>
      <div className='App'>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
