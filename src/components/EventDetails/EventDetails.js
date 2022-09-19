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
    const defaultImage ="https://images.unsplash.com/photo-1600224503431-2b507981ad32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80";


    return (
        <div>
            <Header></Header>
            <div>
                <div id='ticket'>
                <h1>{event.name}</h1>
                <br /> <br />
                    <div className='details-img'>
                        {
                            event.image ? 
                            <img  className='event_details_img' src={event.image} alt="" />
                            : <img  className='event_details_img' src={defaultImage} alt="" />
                        }
                
                    </div>
                    <p className='description'>{event.description}</p>
                    <h3>Location : {event.location}</h3>
                    <h3>Date : {event.date}</h3>
                    <h3>Ticket Price: {event.price} BDT</h3>
                    <br />
                    {/* <button onClick={onDownloadClicked}>Download Ticket</button> */}
                    <button className='evnt-btn' onClick={handleGetTicket} >Get Ticket</button>
                    <br />
                    <br />
                    <br /> <br />
                </div>
            </div>
        </div>
        
    );
};

export default EventDetails;