import { useState } from 'react';

import './App.css'

function App() {

  const [counter, setcounter] = useState(13)
  // this is how a variable is created in react for it to be used later, useState() function takes array of two things, one the variable and other the method, //? as the useState is a method and it need a number from where to start so we give 0 (or any number, or an array, or an method, or a boolean) as a argument otherwise it will add 1 to undefined which will give output of NaN
  const addValue = () => {
    // setcounter(counter + 1)
    // setcounter(counter + 1)
    // setcounter(counter + 1)
  
    // this is above os Batching and it gives us problem because react takes all the above lines code as one batch 

    // setcounter((prevCounter) => prevCounter + 1)
    // setcounter((prevCounter) => prevCounter + 1)
    // setcounter((prevCounter) => prevCounter + 1)
    //? now the batching problem is solved because the call back function will be solved first and gives the updated value so the counter will add 3 to the previous value, also comment the below code
    
    setcounter(counter + 1)
    console.log(counter);
  }


  // let counter = 15
  // const addValue = () => {
  //   counter = counter + 1
  //   console.log(counter);
  // }

  const removeValue = () => {
    setcounter(counter - 1)
    console.log(counter);
  }


  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value:  {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer:  {counter}</p>
    </>
  )

}

export default App
