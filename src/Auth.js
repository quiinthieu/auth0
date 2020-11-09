import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

function Auth(props) {
    const {isLoading} = useAuth0();

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div >
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
        </div>
    );
}

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return !isAuthenticated && (
        <button type={"button"} onClick={loginWithRedirect}>Log In</button>
    )
}

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();
    return isAuthenticated && (
        <button type={"button"} onClick={logout}>Log out</button>
    )
}

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <JSONPretty data={user}/>
        </div>
    );
}
export default Auth;