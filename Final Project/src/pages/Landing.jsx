import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/landing-bg.png";
import Navbar from "../components/Navbar";
import "../stylesheets/Landing.css";

const Landing = () => {
  // Handles background overlay fade-in
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayOpacity(0.7);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("show");
        }, 500 * index);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [overlayOpacity]);

  return (
    <div className="landing-page">
      <Navbar/>
      <div
        className="landing-overlay"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="content-wrapper">
        <p className="fade-in landing-catchphrase">Unleash your inner DJ.</p>
        <div className="fade-in landing-text">
          <p>First time here? <Link to="/create-account">Create an account</Link> to get started.</p>
        </div>
        <div className="fade-in landing-text">
          <p>Already an AirDJ? <Link to="/login">Log in</Link> to resume your journey.</p>
        </div>
      </div>
      {/* Temporary section for development, delete later */}
      <div className="temp-links">
        <p>Temporary Links for Development:</p>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/listening">Listening</Link></li>
          <li><Link to="/hosting">Hosting</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/create-account">Create Account</Link></li>
        </ul>
      </div>
      {/* End of temporary section */}
    </div>
  );
};

export default Landing;
