import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        fetch('events.JSON')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[]);
    return (
        <div>
            <h1>Featured Events</h1>
            <div>
                {
                    events.map(event => <Event
                    key={event.event_id} 
                    event = {event}
                    >
                    </Event>)
                }
            </div>
        </div>
    );
};

export default Events;