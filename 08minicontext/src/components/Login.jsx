import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    // here the setUser is accessed from the useContext hook, from the store. and we may have many context in our app like {product context, login context, api call context etc.} so we have to pass the speciefic context in the useContext(), which is UserContext
    //? we can get user also like this, and we can extract the data

    const handleSubmit = (e) => {
        e.preventDefault()
        // we have to prevent default behavior in which the value goes somewhere through url or post method
        setUser({username, password})
    }

return (
    <div>
        <h2>Enter email and press submit to change the login state</h2>
        
        <input
        type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Username'/>
        {"   "}

        <input
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}

export default Login