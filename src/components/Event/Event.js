import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css'

const Event = (props) => {
    // console.log(props.event);
    const event =props.event;

    const navigate = useNavigate();
    const onNavigate = (event)=>{
        navigate("/event_details",{
            state :{
                event: event
            }
        })
    }


    return (
        <div className='event-container'>
            <div>
                <img  className='event_img' src={event.img} alt="" />
            </div>
            <div>
                <h1>{event.name}</h1>
                <div className='event-details'>
                <p>{event.description}</p>
                <h3>Location : {event.location}</h3>
                <h3>Date : {event.date}</h3>
                <h3>Ticket Price: {event.price}</h3>
                <button onClick={() => onNavigate(event)}>Create Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Event;