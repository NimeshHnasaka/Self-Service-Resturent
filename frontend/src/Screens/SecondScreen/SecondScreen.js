

import React from 'react';

import './SecondScreen.css'; // Import the CSS file
import ObjectDetection from '../../Components/ObjectDetection/ObjectDetection';



const SecondScreen = ({ capturedImage}) => {

    
    return (
        <div className="SecondScreenContainer">
          
            {/* Display the captured image */}
            {capturedImage && (
                <div className="CapturedImageContainer">
                    <h2>Captured Image:</h2>
                    <img src={capturedImage} alt="Captured" />
                </div>
            )}
            {/* Render the ObjectDetection component with the capturedImage prop */}
            <ObjectDetection capturedImage={capturedImage} />
           {/* Display total bill */}
           


        </div>
    );
};

export default SecondScreen;




