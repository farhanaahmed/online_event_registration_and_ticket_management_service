import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
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
                const q = query(eventRef, where("userId", "==", userId));
                const eventSnapshot = await getDocs(q);
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
        const defaultImage ="https://images.unsplash.com/photo-1600224503431-2b507981ad32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80";


    return (
        <div>
            <Header></Header>
            <h1 className='event-list-header'>My Events</h1>
            {events ?
                <div>
                {
                    events.map(event =>{
                        return (
                        <div className='event-container'>
                            <div className='img'>
                            {
                                event.image ? 
                                <img  className='event_img' src={event.image} alt="" />
                                :<img  className='event_img' src={defaultImage} alt="" />
                            }
                    
                            </div>
                            <div className='details'>
                                <h2>{event.name}</h2>
                                <p>{event.description}</p>
                                <h3>Location : {event.location}</h3>
                                <h3>Date : {event.date}</h3>
                                <h3>Ticket Price: {event.price} BDT</h3>
                                <button className='evnt-btn' onClick={() => onNavigate(event)}>View Details</button>
                                <br /><br /><br />
                            </div>
                        </div>
                    )

                    })
                }
                </div> :
                <div></div>
            }
        </div>
    );
};

export default Event_List;