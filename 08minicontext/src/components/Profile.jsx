import  { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <h3>Not Logged In</h3>

    return (
        <div> 
            <h1>Profile : {user.username}</h1>
        </div>
    )
}

export default Profile