import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { currentUser, signOutUser } = useAuth();
  function handleLogOut(e) {
    signOutUser();
  }
  return (
    <div className="">
      <nav>
        <img src="/tripiter.png" alt="tripiter-logo" />
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>{currentUser ? <p onClick={handleLogOut}>Log Out</p> : ''}</li>
        </ul>
      </nav>
    </div>
  );
}
