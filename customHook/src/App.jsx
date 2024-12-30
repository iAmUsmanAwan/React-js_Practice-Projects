import useCounter from './Custom Hooks/useCounter'
import './App.css'

function App() {
  
  const { count, increment, decrement, reset } = useCounter();    //* if we want to set initial value then we can pass it as an argument to useCounter function, otherwise it will take default value 0

  return (
    <>
      <h1>Counter by Custom Hook</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
