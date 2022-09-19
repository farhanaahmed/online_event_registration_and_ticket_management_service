import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDb } from '../../Firebase/firebase.initialize';
import Header from '../Header/Header';
import './MyTickets.css';
import { collection, getDocs, doc, query, where } from 'firebase/firestore';

const MyTickets = () => {
        const db = getDb();
        const[tickets, setTickets] = useState();
        const auth = getAuth();

        useMemo(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    getTickets(user.uid);
                }
              }); 
        },[]);

        async function getTickets(userId){
            try{
                const ref = collection(db,"tickets");
                const docref = doc(ref,userId);
                const ticketsRef = collection(docref,"tickets");

                const ticketSnapshot = await getDocs(ticketsRef);
                const ticketList = ticketSnapshot.docs.map(doc => doc.data());
                console.log(ticketList);
                setTickets(ticketList);
            }
            catch(e){
                console.error("error getting document: ",e);
            }
        }

        const navigate = useNavigate();
        const onNavigate = (ticket)=>{
            navigate("/ticket_details",{
                state :{
                    ticketInfo: ticket
                }
            })
        }

    return (
        <div>
            <Header></Header>
            <h1 className='ticket-header'>My Tickets</h1>
            {tickets ?
                <div>
                {
                    tickets.map(ticket =>{
                        return (
                        <div className='ticket-container'>
                            <h2>{ticket.eventName}</h2>
                            <div className='ticket-details'>
                                <h3>Purchased by: {ticket.name}</h3>
                                <h3>Number of tickets: {ticket.numberOfTickets}</h3>
                                <button className='ticket-btn' onClick={() => onNavigate(ticket)}>View Details</button>
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

export default MyTickets;