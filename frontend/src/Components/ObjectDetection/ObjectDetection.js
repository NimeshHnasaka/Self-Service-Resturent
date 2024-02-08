


import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import TotalBill from '../TotalBill/TotalBill';

const ObjectDetection = ({ capturedImage }) => {
    const [detectedObjects, setDetectedObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTotalBill, setShowTotalBill] = useState(false);
    const [objectQuantity, setObjectQuantity] = useState({});
    

    useEffect(() => {
        const detectObjects = async () => {
            try {
                // Load the COCO-SSD model
                const model = await cocoSsd.load();

                // Create an image element from the captured image
                const imageElement = document.createElement('img');
                imageElement.src = capturedImage;

                // Make predictions on the image
                const predictions = await model.detect(imageElement);

                // Extract class names from predictions
                const detectedObjects = predictions.map(prediction => prediction.class);

                // Set detected objects
                setDetectedObjects(detectedObjects);

                // Count object quantity
                const objectQuantity = countObjectQuantity(detectedObjects);
                setObjectQuantity(objectQuantity);


                setLoading(false);

                // Show detected objects for a short duration before showing total bill
                setTimeout(() => {
                    setShowTotalBill(true);
                }, 10000); // Adjust the duration (in milliseconds) as needed

                // Log detected objects to the console
                console.log('Detected objects:', detectedObjects);
            } catch (error) {
                console.error('Error detecting objects:', error);
                setLoading(false);
            }
        };

        // Call detectObjects when capturedImage changes
        if (capturedImage) {
            detectObjects();
        }
    }, [capturedImage]);

    // Function to count the occurrences of each detected object
    const countObjectQuantity = (detectedObjects) => {
        const objectQuantity = {};
        detectedObjects.forEach(object => {
            objectQuantity[object] = (objectQuantity[object] || 0) + 1;
        });
        return objectQuantity;
    };

    // // Function to calculate total bill
    // const calculateTotalBill = (objectQuantity) => {
    //     let bill = 0;
    //     for (const object in objectQuantity) {
    //         bill += objectPrices[object] * objectQuantity[object];
    //     }
    //     return bill;
    // };

   

    return (
        <div className='Object-Detection-Container'>
            {showTotalBill ? (
                <TotalBill detectedObjects={detectedObjects} objectQuantity={objectQuantity} />
            ) : (
                <div>
                    <h1>Object Detection Component</h1>
                    {capturedImage && (
                        <div className="CapturedImageContainer">
                            <h2>Captured Image:</h2>
                            <img src={capturedImage} alt="Captured" />
                        </div>
                    )}
                    <h2>Detected Objects:</h2>
                    {loading ? (
                        <p>Detecting objects...</p>
                    ) : (
                        <ul>
                            {Object.entries(objectQuantity).map(([object, quantity]) => (
                                <li key={object}>
                                    {object} - Quantity: {quantity}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default ObjectDetection;