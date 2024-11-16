import Youtube from "./Youtube"


function App() {
  var userName = "Aladeen"

  return (   //? we can only return one element, but if we want to return more elements, we will wrap it in one div or an empty <></> element and it will also not disturb the flow of the webpage, here Youtube function is also called
    <>
      <h1>Vite React App {"   "} From App.JSX {2+3}</h1>
      <h2>Vite React App From App.JSX {userName} </h2>
      <Youtube />
    </>
  )
}

export default App
