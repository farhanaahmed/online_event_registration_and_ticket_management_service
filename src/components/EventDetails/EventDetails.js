import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';

const EventDetails = () => {

    const {state} = useLocation();
    const event = state.event;

    return (

        <div id='ticket'>
            <Header></Header>
            <div>
                <p>{event.description}</p>
                <h3>Location : {event.location}</h3>
                <h3>Date : {event.date}</h3>
                <h3>Ticket Price: {event.price} BDT</h3>
            </div>
        </div>
        
    );
};

export default EventDetails;