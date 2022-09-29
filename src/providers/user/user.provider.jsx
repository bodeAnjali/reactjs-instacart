import React, { createContext, useEffect, useState } from 'react';
import { setLogInUser, setSignUpUser, setLogOut } from './user.utils';

export const UserContext = createContext({
    user: {},
    LogInUser: () => { },
    SignUpUser: () => { },
    LogOut: () => { }
});

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(localStorage.getItem('user-info'))
    }, [])

    useEffect(() => {
        console.log(user);
    }, [user])

    const LogInUser = userCredentials => setUser(setLogInUser(userCredentials))

    const SignUpUser = userCredentials => setSignUpUser(userCredentials);

    const LogOut = () => setUser(setLogOut());

    return (
        <UserContext.Provider
            value={{
                user,
                LogInUser,
                SignUpUser,
                LogOut
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;