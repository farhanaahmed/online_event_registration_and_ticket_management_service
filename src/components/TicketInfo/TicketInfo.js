import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './TicketInfo.css'

const TicketInfo = () => {
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
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(ticketInfo);
        navigate('/ticket_details');
    }
    return (
        <div>
            <Header></Header>
            <h1>Ticket Information</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>Name :</label><br/><br />
                <input className='input' type="text" placeholder='John Doe' required onChange={(e)=>{handleNameChange(e)}} /><br/><br />
                <label>Phone :</label><br/><br />
                <input className='input' type="numeric" placeholder='Enter your phone number' required onChange={(e)=>{handlePhoneChange(e)}} /><br/><br />
                <label>Number of Tickets :</label><br/><br />
                <input className='input' type="number" min={1} placeholder='Enter number of tickets you want' required onChange={(e)=>{handleNumberOfTicketsChange(e)}} /><br/><br />
                <input className='submit' type="submit" value="Confirm"/>  
            </form>
        </div>
    );
};

export default TicketInfo;