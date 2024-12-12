import {useParams} from "react-router-dom"

function User() {
    const {userid} = useParams()
        return (
            <div className='bg-orange-600 text-black text-3xl text-center py-5'>Edit the user in the address bar with a / and  the user gets updated below <hr/> User: {userid}</div>
        )
}

export default User