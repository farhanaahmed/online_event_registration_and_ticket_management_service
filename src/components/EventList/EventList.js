import React from 'react';

const Event_List = (props) => {
    console.log(props);
     console.log(props.event);
    const{name,description,date,location,price,visibility} = props.event;
    return (
        <div>
            <h1>My Events</h1>
            <div>
                <h2>{name}</h2>
                <div className='event-details'>
                <p>{description}</p>
                <h3>Location : {location}</h3>
                <h3>Date : {date}</h3>
                <h3>Ticket Price: {price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Event_List;