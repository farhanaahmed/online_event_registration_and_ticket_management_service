import React, { useMemo } from 'react';
import './Header.css'
import { getAuth, GoogleAuthProvider , signOut, browserLocalPersistence, setPersistence, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import {initializeAuthentication} from '../../Firebase/firebase.initialize';

const provider = new GoogleAuthProvider();
initializeAuthentication();
const Header = () => {
    const[user,setUser] = useState({});
    const auth = getAuth();
    setPersistence(auth,browserLocalPersistence);
    const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider)
    .then((result) => {
      const {displayName,email,photoURL} = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL
      };
      setUser(loggedInUser);
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useMemo(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName,email,photoURL} = user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        console.log("setting user");
        setUser(loggedInUser);
      }
      console.log("logging in useMemo");
      console.log(user);
    }); 
    },[]);

    return (
        <div className='header'>
            <nav className='navbar'>  
                <div className="links">
                { user.name ?
                  <div className="events">
                    <a href="/home">Home</a>
                    <a href="/create_events">Create Events</a>
                    <a href="/my_events">My Events</a>
                  </div>:
                  <div className="home">
                    <a href="/home">Home</a>
                  </div>

                }
                  
                </div>
                <div className="login-container">
                  { user.name ? 
                      <div className='logged-user-info'>
                        <p>{user.name}</p>
                        {/* <img src={user.photo} alt="" /> */}
                        <button onClick={handleSignOut}>Sign Out</button>
                      </div>:
                      <button onClick={handleGoogleSignIn}>Sign In</button>
                  }    
                </div>
            </nav>    
        </div>
    );
};

export default Header;