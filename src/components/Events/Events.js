import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import Header from '../Header/Header';
import './Events.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getDb } from '../../Firebase/firebase.initialize';

const Events = () => {
    const [events,setEvents]=useState([]);

    useEffect(()=>{
        getAllEvents();
    },[]);

    const db = getDb();
    async function getAllEvents(){
        try{
            const eventRef = collection(db,"events");
            const eventSnapshot = await getDocs(eventRef);
            const eventList = eventSnapshot.docs.map(doc => doc.data());
            console.log(eventList);
            setEvents(eventList);
        }
        catch(e){
            console.error("error adding document: ",e);
        }
    }

    return (
        <div className='events'>
            <Header></Header>
            <h1 className='featured'>All Events</h1>
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