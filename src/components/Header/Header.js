import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>  
               <a href="/home">Home</a>
               <a href="/create_events">Create Events</a>
               {/* <a href="/my_events">My Events</a> */}
               <a href="/join_events">Join Events</a>
            </nav>
        </div>
    );
};

export default Header;