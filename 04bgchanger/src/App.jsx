import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('teal')

  //? this function works just fine but there is a better approach also which is using setColor directly, and then whatever color we will give to setColor will change the color to that color 
  // function changeColor(color) {
  //   setColor(color)
  // }

  return (

    // <>
    //   <h1 className="text-3xl bg-green-500 rounded" >A BG Changer App with Vite</h1>
    // </>

    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
          
          <button onClick={() => setColor('green')} style={{backgroundColor: 'lightgreen'}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg '>Green</button>

          <button onClick={() => setColor('indigo')} style={{backgroundColor: 'lightblue'}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg '>Indigo</button>
          
          <button onClick={() => setColor('olive')} style={{backgroundColor: 'lightsalmon'}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg '>Olive</button>

          <button onClick={() => setColor('gray')} style={{backgroundColor: 'lightgray'}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg '>Gray</button>

        </div>
      </div>

    </div>

  )
}

export default App
