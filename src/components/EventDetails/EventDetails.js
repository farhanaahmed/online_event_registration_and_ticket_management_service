import React from 'react';
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './EventDetails'

const EventDetails = () => {

    const {state} = useLocation();
    const event = state.event;

    const onDownloadClicked = ()=>{

    }

    return (
        <div id='ticket'>
            <Header></Header>
            <div>
                <p>{event.description}</p>
                <h3>Location : {event.location}</h3>
                <h3>Date : {event.date}</h3>
                <h3>Ticket Price: {event.price} BDT</h3>
                <QRCode className='.qr-code' value={JSON.stringify(event)} />
                <br />
                <button onClick={onDownloadClicked}>Download Ticket</button>
            </div>
        </div>
        
    );
};

export default EventDetails;