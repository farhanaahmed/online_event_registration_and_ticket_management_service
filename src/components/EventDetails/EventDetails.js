import React, { useEffect, useMemo, useState } from 'react';
import QRCode from 'react-qr-code';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './EventDetails.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const EventDetails = () => {

    const {state} = useLocation();
    const event = state.event;
    const auth = getAuth();
    const navigate = useNavigate();

    const handleGetTicket = () => {
        const user = auth.currentUser;
        if(user){
            navigate('/ticket_info',{
                state :{
                    event: event
                }
            });
            console.log("go to ticket details please");
        }
        else{
            navigate('/login')
            console.log("please log in");
        }
    }

    return (
        <div>
            <Header></Header>
            <div>
                <div id='ticket'>
                    <h2>{event.name}</h2>
                    <p className='description'>{event.description}</p>
                    <h3>Location : {event.location}</h3>
                    <h3>Date : {event.date}</h3>
                    <h3>Ticket Price: {event.price} BDT</h3>
                    {/* <QRCode className='.qr-code' value={JSON.stringify({
                        name: event.name,
                        location: event.location,
                        date : event.date,
                        price : event.price
                    })} /> */}
                </div>
                <br />
                {/* <button onClick={onDownloadClicked}>Download Ticket</button> */}
                <button onClick={handleGetTicket} >Get Ticket</button>
            </div>
        </div>
        
    );
};

export default EventDetails;