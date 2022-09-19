import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from '../Header/Header';

const Login = () => {
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
        // console.log(name);
    }

    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
        // console.log(name);
    }
    const loginInfo = {
        email : email,
        password : password,
    }

    const auth = getAuth();
    const handleSubmit=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate(-1);
        })
        .catch((error) => {
           console.log(error);
        });
    }

    const navigate = useNavigate();
    const handleRegister = () => {
      navigate("/register");
    }

    return (
        <div>
            <Header></Header>
            <h1 className='login-header'>
                Login to our website
            </h1>
            <div className="login-box">
                <div className="login">
                    <h3 className='user-type-registered'>REGISTERED USERS</h3>
                    <h4>If you already have an account with us, login with your email and password.</h4>
                    <div className="login-form">
                    <form onSubmit={(e) => {handleSubmit(e)}}>
                        <label>E-mail :</label><br/><br />
                        <input className='field' type="email" placeholder='ex: farhanaahmed@example.com' required onChange={(e)=>{handleEmailChange(e)}} /><br/><br />
                         <label>Password :</label><br/><br />
                         <input className='field' type="password" placeholder='Enter your password' required onChange={(e)=>{handlePasswordChange(e)}} /><br/><br />
                         <input className='evnt-btn' type="submit" value="Login"/>    
                    </form>
                    </div>
                    
                </div>
                <div className="register">
                    <h3 className='user-type-new'>NEW USERS</h3>
                    <h4>Please register to our website for hosting and joining in events easily. </h4>
                    <button className='evnt-btn' onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;