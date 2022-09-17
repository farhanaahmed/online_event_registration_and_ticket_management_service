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
    }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
    }
    const handleCpasswordChange =(e)=>{
        setCpassword(e.target.value);
    }
    const handleNationalIdChange =(e)=>{
        setNationalId(e.target.value);
    }
    const registerInfo = {
        username : username,
        email : email,
        password : password,
        cpassword : cpassword,
        nationalId : nationalId,
        // visibility : visibility
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(registerInfo);
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