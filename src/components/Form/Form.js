import React, { useMemo } from 'react';
import './Form.css'
import { useState } from 'react';
// import EventList from '../EventList/EventList';
import Header from '../Header/Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc } from 'firebase/firestore';
import { getDb } from '../../Firebase/firebase.initialize';
import { Navigate, useNavigate } from 'react-router-dom';

const Form = () => {
    const [name , setName] = useState('');
    const [description , setDescription] = useState('');
    const [date , setDate] = useState('');
    const [location , setLocation] = useState('');
    const [price , setPrice] = useState('');
    const [visibility , setVisibility] = useState('');
    const [user, setUser] = useState({});

    const handleNameChange =(e)=>{
        setName(e.target.value);
        // console.log(name);
    }
    const handleDescriptionChange =(e)=>{
        setDescription(e.target.value);
        // console.log(description);
    }
    const handleDateChange =(e)=>{
        setDate(e.target.value);
        // console.log(date);
    }
    const handleLocationChange =(e)=>{
        setLocation(e.target.value);
        // console.log(location);
    }
    const handlePriceChange =(e)=>{
        setPrice(e.target.value);
        // console.log(price)
    }
    const handleVisibilityChange =(e)=>{
        setVisibility(e.target.value);
        // console.log(visibility);
    }
    const event = {
        name : name,
        description : description,
        date : date,
        location : location,
        price : price,
        visibility : visibility
    }
    const db = getDb();
    const navigate = useNavigate();
    async function saveEvent(userId,event){
        try{
            const eventRef = collection(db,"events");
            const userRef = doc(eventRef, userId);
            const userDocRef = collection(userRef,"events");
            const docRef = await addDoc(userDocRef,event);
            console.log("Document written with ID: ",docRef.id);
            navigate("/my_events");

        }
        catch(e){
            console.error("error adding document: ",e);
        }
    }
    const handleSubmit=(e)=>{
        // console.log(event);
        e.preventDefault();
        saveEvent(user.id,event);
   
    }
    useMemo(() => {
        onAuthStateChanged(getAuth(), (user) => {
          if (user) {
            const {displayName,email,photoURL,uid} = user;
            const loggedInUser = {
              id: uid,
              name: displayName,
              email: email,
              photo: photoURL
            };
            console.log("in form");
            setUser(loggedInUser);
          }
          console.log("logging in useMemo");
          console.log(user);
        }); 
        },[]);

    
    return (
        <div>
            <Header></Header>
            <h1 className='heading'>Create Your Event</h1>
            <div className='form'>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <label className='label' >
                    Event Name <sup className='star'>*</sup>
                    </label><br/>
                    <input type="text" size={82} value={name} required onChange={(e)=>{handleNameChange(e)}} /><br/><br />
                    <label className='label' >
                    Description <sup className='star'>*</sup> 
                    </label><br/>
                    <textarea rows={10} cols={80} value={description} required onChange={(e)=> {handleDescriptionChange(e)}}> </textarea><br/><br />
                    <label className='label'>
                    Date <sup className='star'>*</sup>
                    </label><br/>
                    <input type="date" value={date} required onChange={(e)=> {handleDateChange(e)}} /><br/><br />
                    <label className='label'>
                    Location <sup className='star'>*</sup>
                    </label><br/>
                    <input type="text" value={location} required onChange={(e)=> {handleLocationChange(e)}} /><br/><br />
                    <label className='label'>
                    Ticket Price <sup className='star'>*</sup>
                    </label><br/>
                    <input type="number" value={price} required onChange={(e)=> {handlePriceChange(e)}} /><br/><br />
                    <label className='label'>
                    Visibility <sup className='star'>*</sup>
                    </label><br/>
                    <input type="radio" id="public" name= "visibility" value='public' onChange={(e)=> {handleVisibilityChange(e)}}/>
                    <label className='label' htmlFor="public">Public</label><br/>
                    <input type="radio" id= "private" name="visibility" value= 'private' onChange={(e)=> {handleVisibilityChange(e)}}/>
                    <label className='label' htmlFor="private">Private</label><br></br>
                    <br /><br />
                    <div className='btn'>
                        <input className='submit' type="submit" value="Create Event"/>
                    </div>
                </form>
            </div>
            {/* <div className='event-list'>
                <EventList event={event}></EventList>
            </div> */}
        </div>
    );
};

export default Form;