import React from 'react';
import './Event.css'

const Event = (props) => {
    // console.log(props.event);
    const {event_name,event_img,event_description,event_date,event_location,event_type,ticket_price }=props.event;
    return (
        <div className='event-container'>
            <div>
                <img  className='event_img' src={event_img} alt="" />
            </div>
            <div>
                <h1>{event_name}</h1>
                <div className='event-details'>
                <p>{event_description}</p>
                <h3>Location : {event_location}</h3>
                <h3>Date : {event_date}</h3>
                <h3>Ticket Price: {ticket_price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Event;