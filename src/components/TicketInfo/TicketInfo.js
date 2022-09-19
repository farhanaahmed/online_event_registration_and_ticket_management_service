import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './TicketInfo.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc } from 'firebase/firestore';
import { getDb } from '../../Firebase/firebase.initialize';

const TicketInfo = () => {
    const {state} = useLocation();
    const event = state.event;

    const[name,setName] = useState('');
    const[phone,setPhone] = useState('');
    const [numberOfTickets,setNumberOfTickets] = useState('');
    const navigate = useNavigate();
    const handleNameChange =(e)=>{
        setName(e.target.value);
    }

    const handlePhoneChange =(e)=>{
        setPhone(e.target.value);
    }

    const handleNumberOfTicketsChange =(e)=>{
        setNumberOfTickets(e.target.value);
    }
    const ticketInfo = {
        name : name,
        phone : phone,
        numberOfTickets : numberOfTickets,
        userId: "",
        eventName: event.name,
    }
    const db = getDb();
    const auth = getAuth();
    async function saveTicket(){
        try{
            const user = auth.currentUser;

            ticketInfo.userId = user.uid;
            const ref = collection(db,"tickets");
            const userTicketRef = doc(ref,user.uid);
            const ticketsRef = collection(userTicketRef,"tickets");
            const docRef = await addDoc(ticketsRef,ticketInfo);
            console.log("Document written with ID: ",docRef.id);
        }
        catch(e){
            console.error("error adding document: ",e);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(ticketInfo);
        saveTicket();
        navigate('/ticket_details',{
            state :{
                ticketInfo: ticketInfo
            }
        });
    }

    return (
        <div>
            <Header></Header>
            <h1>Ticket Information</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>Name :</label><br/><br />
                <input className='input' type="text" placeholder='Farhana Ahmed' required onChange={(e)=>{handleNameChange(e)}} /><br/><br />
                <label>Phone :</label><br/><br />
                <input className='input' type="numeric" placeholder='Enter your phone number' required onChange={(e)=>{handlePhoneChange(e)}} /><br/><br />
                <label>Number of Tickets :</label><br/><br />
                <input className='input' type="number" min={1} placeholder='Enter number of tickets you want' required onChange={(e)=>{handleNumberOfTicketsChange(e)}} /><br/><br />
                <input className='evnt-btn' type="submit" value="Confirm"/>  
            </form>
        </div>
    );
};

export default TicketInfo;