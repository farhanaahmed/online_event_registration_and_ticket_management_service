import React, { useState } from 'react';
import './Register.css'

const Register = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const [nationalId,setNationalId] = useState('');


    const handleUsernameChange =(e)=>{
        setUsername(e.target.value);
        // console.log(name);
    }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
        // console.log(name);
    }

    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
        // console.log(name);
    }
    const handleCpasswordChange =(e)=>{
        setCpassword(e.target.value);
        // console.log(name);
    }

    const handleNationalIdChange =(e)=>{
        setCpassword(e.target.value);
        // console.log(name);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className='register-container'>
            <h1>Register</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
               <label>Username :</label><br/><br />
                <input className='input' type="text" placeholder='ex: johndoe' required onChange={(e)=>{handleUsernameChange(e)}} /><br/><br />
                <label>National Id :</label><br/><br />
                <input className='input' type="numeric" placeholder='Enter your NID number' required onChange={(e)=>{handleNationalIdChange(e)}} /><br/><br />
                <label>E-mail :</label><br/><br />
                <input className='input' type="email" placeholder='ex: johndoe@example.com' required onChange={(e)=>{handleEmailChange(e)}} /><br/><br />
                <label>Password :</label><br/><br />
                <input className='input' type="password" placeholder='Enter a strong password' required onChange={(e)=>{handlePasswordChange(e)}} /><br/><br />
                <label>Confirm Password :</label><br/><br />
                <input className='input' type="password" placeholder='Confirm previously typed password' required onChange={(e)=>{handleCpasswordChange(e)}} /><br/><br />
                <input className='submit' type="submit" value="Register"/>    
            </form>

        </div>
    );
};

export default Register;