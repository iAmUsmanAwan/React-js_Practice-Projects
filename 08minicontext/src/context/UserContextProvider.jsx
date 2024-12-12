import {useState} from 'react'
import PropTypes from 'prop-types'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    // whatever we get as children will be passed forward, it is a generic name and it is similar to outlet of previous project

    const [user, setUser] = useState(null)
    
    //? the user is set to null initially
    //* we can call api here and pass the access in the value in the down return statement, we can make variable and store it in state, and use useEffect or any hook  as per the requirements. This is the main store, now we have to give the access of the store in either App.jsx or Main.jsx
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {/* here we have to access the property of the context through {Provider}, and we give access of the user and setuser as a object in the value */}
            {children}
        </UserContext.Provider>
    );

};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserContextProvider;