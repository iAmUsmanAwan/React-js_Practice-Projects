import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  // if we call apis in App.jsx we will then use userContext with the hook {usecontext}

  return (
    <UserContextProvider>
      {/* here we have given access of the store to the App.jsx */}
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
