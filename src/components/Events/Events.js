import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import Header from '../Header/Header';
import './Events.css';

const Events = () => {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        fetch('events.JSON')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[]);
    return (
        <div className='events'>
            <Header></Header>
            <h1 className='featured'>Featured Events</h1>
            <div>
                {
                    events.map(event => <Event
                    key={event.id} 
                    event = {event}
                    >
                    </Event>)
                }
            </div>
        </div>
    );
};

export default Events;