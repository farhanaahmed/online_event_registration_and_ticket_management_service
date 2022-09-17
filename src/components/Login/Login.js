import React, { useState } from 'react';
import './Login.css'

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
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginInfo);
    }
    return (
        <div>
            <h1 className='login-header'>
                Login to our website
            </h1>
            <div className="login-container">
                <div className="login">
                    <h3 className='user-type-registered'>REGISTERED CUSTOMERS</h3>
                    <h4>If you already have an account with us, login with your email and password.</h4>
                    <div className="login-form">
                    <form onSubmit={(e) => {handleSubmit(e)}}>
                        <label>E-mail :</label><br/><br />
                        <input className='field' type="email" placeholder='ex: johndoe@example.com' required onChange={(e)=>{handleEmailChange(e)}} /><br/><br />
                         <label>Password :</label><br/><br />
                         <input className='field' type="password" placeholder='Enter your password' required onChange={(e)=>{handlePasswordChange(e)}} /><br/><br />
                         <input className='submit' type="submit" value="Login"/>    
                    </form>
                    </div>
                    
                </div>
                <div className="register">
                    <h3 className='user-type-new'>NEW CUSTOMERS</h3>
                    <h4>Please register to our website for hosting and joining in events easily. </h4>
                    <button className='register-btn'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;