import React from 'react';
import Navbar from './Navbar';

function Profile() {
    return (
        <main>
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
                <button className="btn" id="btn2">Sign Up</button>
            </div>
        <h1 className="faq-heading">FAQ'S</h1>
        <section className="faq-container">
            <div className="faq-one">
                <h1 className="faq-page">What is the profile page?</h1>
                <div className="faq-body">
                    <p>The profile page shows your profile picture, and posts that you've made! You can see what your carbon footpring percentage
                        is and when you click on it, it will take you to the leaderboard page where you can compare with friends. When you scroll down,
                        you can see all your previous posts, and by clicking on them, you can view your likes and comments!
                    </p>
                </div>
            </div>
            <hr className="hr-line"/>
            <div className="faq-two">
                <h1 className="faq-page">How can I change my profile picture?</h1>
                <div className="faq-body">
                    <p>To change your profile picture, follow these steps! <br/>
                     Click on the circle where the profile picture is, <br/>
                     Choose add photo from photo library, <br/>
                     and pick your favorite picture! </p>
                </div>
            </div>
            <hr className="hr-line"/>
            <div className="faq-three">
<h1 className="faq-page">What if I want to delete a picture?</h1>
                <div className="faq-body">
                    <p>We hope that you wouldn't want to delete pictures, as these contribute to lowering your carbon footprint and keeping you
                        on top of the leaderboard! However if you would like to, you can click on the image, and when you hold down on it, you can see the option to 
                        delete the picture. Select delete and you will be prompted to confirm your decision. And you're all set! We hope you continue to post with us!
                    </p>
                </div>
            </div>
        </section>
        </div>
    </main>
    )
}

export default Profile;