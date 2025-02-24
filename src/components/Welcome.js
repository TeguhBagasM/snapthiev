// Welcome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <div className="welcome-content">
          <h1>Welcome!</h1>
          <div className="info-box">
            <p className="main-info">
              <span className="highlight">3 seconds</span> for each shot – no retakes!
            </p>
            <p className="sub-info">
              This photobooth captures <span className="highlight">4 pictures</span> in a row, so
              strike your best pose and have fun!
            </p>
          </div>
          <div className="download-info">
            <p>After the session, download your digital copy and share the fun!</p>
          </div>
          <button onClick={() => navigate("/photobooth")} className="start-button">
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
