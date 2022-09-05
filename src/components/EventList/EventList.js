import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDb } from '../../Firebase/firebase.initialize';
import Header from '../Header/Header';
import "./EventList.css"

const Event_List = () => {
    const [user, setUser] = useState({});
    useMemo(() => {
        onAuthStateChanged(getAuth(), (user) => {
          if (user) {
            getEvents(user.uid);
          }
          console.log("logging in useMemo");
          console.log(user);
        }); 
        },[]);

        const db = getDb();
        const[events, setEvents] = useState();
        async function getEvents(userId){
            try{
                const eventRef = collection(db,"events");
                const userRef = doc(eventRef, userId);
                const userDocRef = collection(userRef,"events");
                const eventSnapshot = await getDocs(userDocRef);
                const eventList = eventSnapshot.docs.map(doc => doc.data());
                console.log(eventList);
                setEvents(eventList);
            }
            catch(e){
                console.error("error adding document: ",e);
            }
        }


        const navigate = useNavigate();
        const onNavigate = (event)=>{
            navigate("/event_details",{
                state :{
                    event: event
                }
            })
        }

    return (
        <div>
            <Header></Header>
            <h1 className='event-list-header'>My Events</h1>
            {events ?
                <div>
                {
                    events.map(event =>{
                        return (
                        <div className='event-list'>
                            <h2>{event.name}</h2>
                            <div className='event-details'>
                                <p className='description'>{event.description}</p>
                                <h3>Location : {event.location}</h3>
                                <h3>Date : {event.date}</h3>
                                <h3>Ticket Price: {event.price} BDT</h3>
                                <button onClick={() => onNavigate(event)}>Show Event</button>
                                <br /><br /><br />
                            </div>
                        </div>
                    )

                    })
                }
                </div> :
                <div></div>
            }
            {/* <h1>My Events</h1>
          */}
        </div>
    );
};

export default Event_List;