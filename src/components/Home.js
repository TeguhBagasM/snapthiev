// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-container">
        <h1>snapthiev</h1>
        <p className="welcome-text">
          Welcome to thiever' photobooth! This is your personal photobooth at home.
        </p>

        <div className="image-container">
          <img src="/photobooth-strip.png" alt="photobooth strip" className="photobooth-strip" />
        </div>

        <button onClick={() => navigate("/welcome")} className="start-button">
          START
        </button>

        <footer className="home-footer">
          <p>
            made by{" "}
            <a href="https://thieverse.vercel.app" target="_blank" rel="noopener noreferrer">
              thieverse
            </a>
          </p>
          <p className="copyright">© 2025 thiever. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
