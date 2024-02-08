import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import TotalBill from '../TotalBill/TotalBill';


const ObjectDetection = ({ capturedImage }) => {
    const [detectedObjects, setDetectedObjects] = useState([]);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);

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

 // Mapping of detected objects to prices
 const objectPrices = {
    //tv: 1.5,
    //keyboard: 0.75,
    pizza:20.00
    
    // Add more objects and their prices as needed
};



  // Function to count the occurrences of each detected object
  const countObjectQuantity = () => {
    const objectQuantity = {};
    detectedObjects.forEach(object => {
        objectQuantity[object] = (objectQuantity[object] || 0) + 1;
    });
    return objectQuantity;
};




    return (
        <div>
            <h2>Detected Food Items:</h2>
           

           
           
            {loading ? (



                <p>Detecting objects...</p>
            ) : (
                <ul>
                     {Object.entries(countObjectQuantity()).map(([object, quantity]) => (
                        <li key={object}>
                            {object} - Quantity: {quantity} - Price: ${objectPrices[object] * quantity}
                        </li>
                    ))}
                </ul>


            )}

<TotalBill detectedObjects={detectedObjects} objectPrices={objectPrices} />
                 {/* Display total bill */}
                
        </div>
    );
};

export default ObjectDetection;
