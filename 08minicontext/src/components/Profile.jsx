import  { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    // same as the login.jsx but here we are taking the data not the method

    if (!user) return <h3>Please Log In</h3>

    // if user is present then return the profile component with user data
    return (
        <div> 
            <h1>Profile : {user.username}</h1>
            <h2>Password : {user.password}</h2>
        </div>
    )
}

export default Profile