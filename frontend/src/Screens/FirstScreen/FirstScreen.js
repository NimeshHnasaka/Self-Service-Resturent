import React from 'react';
import './FirstScreen.css'; // Import the CSS file for styling
import CaptureImage from '../../Components/CaptureImage/CaptureImage';

function FirstScreen() {
  return (
    <div className="first-screen-container">
      <h1 className="welcome-message">Welcome!</h1>
      <CaptureImage />
    </div>
  );
}

export default FirstScreen;