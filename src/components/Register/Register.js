import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import './Register.css';
import { useNavigate  } from 'react-router-dom';
import Header from '../Header/Header';

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
    }


    const auth = getAuth();
    let navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateUserProfile();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const updateUserProfile = ()=>{
        updateProfile(auth.currentUser, {
            displayName: username,
          }).then(() => {
            navigate(-2);
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <Header></Header>
            <div className='register-container'>
            <h1>Register</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
               <label>Username :</label><br/><br />
                <input className='input' type="text" placeholder='ex: farhanaahmed' required onChange={(e)=>{handleUsernameChange(e)}} /><br/><br />
                <label>National Id :</label><br/><br />
                <input className='input' type="numeric" placeholder='Enter your NID number' required onChange={(e)=>{handleNationalIdChange(e)}} /><br/><br />
                <label>E-mail :</label><br/><br />
                <input className='input' type="email" placeholder='ex: farhanaahmed@example.com' required onChange={(e)=>{handleEmailChange(e)}} /><br/><br />
                <label>Password :</label><br/><br />
                <input className='input' type="password" placeholder='Enter a strong password' required onChange={(e)=>{handlePasswordChange(e)}} /><br/><br />
                <label>Confirm Password :</label><br/><br />
                <input className='input' type="password" placeholder='Confirm previously typed password' required onChange={(e)=>{handleCpasswordChange(e)}} /><br/><br />
                <input className='evnt-btn' type="submit" value="Register"/>    
            </form>

        </div>
        </div>
    );
};

export default Register;