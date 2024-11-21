// import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md " >Vite with Tailwind </h1>
      <Card userName="Johnny Bravo" post="Cartoon" />
      <Card userName="Mr. Wick" post="Hitman" />
      <Card userName="John Cena" post="Actor" />
      <Card />
      <Card />
    </>
  )
}

export default App
