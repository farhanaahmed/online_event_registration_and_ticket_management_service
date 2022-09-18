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

    const defaultImage =" https://www.bangladeshyp.com/img/bd/m/1522560028-61-event-management-bangladesh.jpg";

    return (
        <div className='event-container'>
            <div className='img'>
                {
                    event.image ? 
                    <img  className='event_img' src={event.image} alt="" />
                    : <img  className='event_img' src={defaultImage} alt="" />
                }
                
            </div>
            <div className='details'>
                <h1>{event.name}</h1>
                <p>{event.description}</p>
                <h3>Location : {event.location}</h3>
                <h3>Date : {event.date}</h3>
                <h3>Ticket Price: {event.price}</h3>
                <button className='evnt-btn' onClick={() => onNavigate(event)}>View Event</button>
            </div>
        </div>
    );
};

export default Event;