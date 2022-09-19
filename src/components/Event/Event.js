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

    const defaultImage ="https://images.unsplash.com/photo-1600224503431-2b507981ad32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80";

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
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <h3>Location : {event.location}</h3>
                <h3>Date : {event.date}</h3>
                <h3>Ticket Price: {event.price} BDT</h3>
                <button className='evnt-btn' onClick={() => onNavigate(event)}>View Event</button>
                <br /> <br /> <br /> <br />
            </div>
        </div>
    );
};

export default Event;