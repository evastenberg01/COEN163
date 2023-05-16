import React from 'react';
import logo from './assets/logo.png';
import Navbar from './Navbar';

const Welcome = () => {
  return (
    <div className="container">
        <div className="header">
            <img src={logo} className="logo"/>
            <Navbar>
                <ul>
                    <li><a href="profile.html">Profile Page</a></li>
                    <li><a href="leaderboard.html">Leaderboard</a></li>
                    <li><a href="welcome.html">Welcome</a></li>
                </ul>
            </Navbar>
            <form action="leaderboard.html">
                <button className="btn" id="btn2">Sign Up</button>
            </form>
        </div>
        <div className="content">
            <div className="text">
            <h1><span>Cleaning the world one post at a time!</span></h1>
            <p>Earn money by learning how to manage your waste <br/>Originally created and developed in 2023
            </p>
            <button className="btn3">Learn more!</button>
           </div>
       </div>
   </div>
  )
}

export default Welcome