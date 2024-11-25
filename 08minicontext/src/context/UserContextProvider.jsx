import {useState} from 'react'
import PropTypes from 'prop-types'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    //? the user is set to null initially
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );

};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserContextProvider;