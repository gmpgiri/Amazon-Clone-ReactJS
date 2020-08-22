import React, { useState } from 'react';
import './Login.css';
import './Product.css';
import { Link, useHistory } from 'react-router-dom';
import firebase from './firebase';
import { auth } from 'firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = event => {
        event.preventDefault();         //stops refresh. in react we hate refresh.. :P
        //login logic
        auth().signInWithEmailAndPassword(email,password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message));

    };

    const register = event => {
        event.preventDefault();         //stops refresh. in react we hate refresh.. :P
        //register logic
        auth().createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/');
                //created a user and logged in, redirect to homepage
            })
            .catch(e => alert(e.message));

    }


    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="company logo"
                />
            </Link>

            <div className="login__container">
                <h1> Sign In</h1>
                <form>
                    <h5> E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5> Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In</button>
                </form>
                <button onClick={register} className="login__registerButton">Create your account</button>
            </div>
        </div>
    )
}

export default Login
