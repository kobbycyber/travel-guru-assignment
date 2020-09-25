import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App'
import { Form } from 'react-bootstrap';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';



const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
    })
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
               handleResponse(res, false)
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
      if(redirect){
        history.replace(from);
      }
    }

    const handleBlur = (e) => {
        let isFieldValid;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })
        }
        e.preventDefault();
    }

    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <FormControlLabel
                    control={<Checkbox name="newUser" onChange={() => setNewUser(!newUser)} id="" />}
                    label="New User Sign Up "
                />
                {newUser && <Form.Group controlId="formBasicName">
                    <Form.Label>Name: {user.name}</Form.Label>
                    <Form.Control type="name" placeholder="your name" required />
                </Form.Group>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address: {user.email}</Form.Label>
                    <Form.Control type="email" name="email" onBlur={handleBlur} placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: {user.password}</Form.Label>
                    <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                </Form.Group>
                <input type="submit" value="Submit" />
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>
                }
            </Form>

            <div>
                {
                    user.isSignedIn ? <Button variant="warning" onClick={signOut}>Google signOut</Button> :
                        <button onClick={googleSignIn}>Google signIn</button>
                }
                {
                    user.isSignedIn && <div>
                        <h4>Welcome, {user.name}</h4>
                        <p>Email: {user.email}</p>
                    </div>
                }
                <br />
                <div className="p-4">
                <FacebookIcon onClick={fbSignIn} > </FacebookIcon>
                <Button variant="warning" >Sing in Facebook</Button>
                </div>
                {
                    user.isSignedIn && <div>
                        <h4> {user.name}</h4>

                    </div>
                }
            </div>
        </div>
    );
};

export default Login;