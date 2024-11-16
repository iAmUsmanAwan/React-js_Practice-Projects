import React from 'react'  
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'

//? this can not be called like this it should be created like aReactElement 
const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//? this is how we create an object that can be passed as an element in react, now it can also be simply called like the AnotherElement
const aReactElement = React.createElement(
    'a',
    { href: "http://google.com", target: '_blank' },
    'Click me to visit google'
)

function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
            <p>Welcome to my Custom React App!</p>
        </div>
    )
}
//? this is returning html from JavaScript which is basicaly JSX

const AnotherElement = (
    <a href="http://google.com" target="_blank" >Visit Gooogle</a>
)
//? when a variable is declared like this then it will passed like AnotherElement directly and it will show output, but vite requires it to be named staring from a capital letter

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)