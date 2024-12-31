import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(0)

  let multipliedValue = value * 5   //* This is a better way to do it, without using setMultipliedValue

  const multiplybyfive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main Value: {value} </h1>
      <button 
      onClick= {multiplybyfive}
      >Click to Multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  )
}

export default App
