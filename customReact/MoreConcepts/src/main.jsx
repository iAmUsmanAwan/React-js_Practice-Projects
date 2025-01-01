import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

function MyApp(){    //* this can be run in the main function by calling it like MyApp(), But not recommended to load it like a function in the main. Instead use it as a component as it is a JSX element
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const AnotherElement = (  //* this can be run in the main function by calling it like a variable, AnotherElement. But reactElement is not a component, so it will not work
  <a href="http://google.com" target="_blank">Click me to visits Google</a>
) 


const reactElement = {    //* React does not understand this object, so it will not work, we need to convert it to React.createElement
  type: 'a',
  props: {
      href: "http://google.com",
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const areactElement = React.createElement(   //* this can be run in the main function by calling it like a variable, areactElement.
  'a', 
  {href: 'http://google.com', target: '_blank'}, 
  'Click me for visiting google')        //? here first argument is the type of the element, second is attributes of the element, and third argument is the children of the element


createRoot(document.getElementById('root')).render(
  <App />
)
