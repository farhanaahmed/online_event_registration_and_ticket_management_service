import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>  
               <a href="/home">Home</a>
               <a href="/create Events">Create Events</a>
               <a href="/join Events">Join Events</a>
            </nav>
        </div>
    );
};

export default Header;