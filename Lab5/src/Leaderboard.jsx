import React from 'react';
import Navbar from './Navbar';

function Leaderboard() {
    return (
        <div className="container">
        <div className="header">
            <img src="images/recycle.png" className="logo"/>
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
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/djpRUafjx7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
   </div>
   
    )
}

export default Leaderboard;