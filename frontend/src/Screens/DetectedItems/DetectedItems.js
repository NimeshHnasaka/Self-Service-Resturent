import React from 'react';

const DetectedItems = ({ capturedImage,detectedItems }) => {


    return (
        <div>
            <h1>Detected Food Items</h1>
            {/* Display the captured image */}
            {capturedImage && (
                <div>
                    <h2>Captured Image:</h2>
                    <img src={capturedImage} alt="Captured" />
                </div>
            )}
            {/* Display detected food items */}
            <h2>Detected Items:</h2>
            <ul>
                {detectedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetectedItems;


