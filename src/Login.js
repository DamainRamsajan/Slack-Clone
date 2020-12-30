import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
    const [user, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message )
        })
    }
    return (
        <div className ="login">
            <div className ="login__container">
                <img src= "/images/logo.png" alt= "0"/>
                <h1> Sign in to the Business Communication Platform App- Damain Ramsajan</h1>
                <h2><a target = "" href= "https://github.com/DamainRamsajan">Github page</a> </h2>
                <Button onClick= {signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
