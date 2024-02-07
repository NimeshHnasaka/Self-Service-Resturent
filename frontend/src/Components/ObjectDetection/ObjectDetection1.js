// import React, { useEffect, useState } from 'react';
// import * as tf from '@tensorflow/tfjs';
// import * as cocoSsd from '@tensorflow-models/coco-ssd';
// import './ObjectDetection.css'; // Import CSS file

// const ObjectDetection = ({ capturedImage }) => {
//     const [detectedObjects, setDetectedObjects] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const detectObjects = async () => {
//             try {
//                 // Load the COCO-SSD model
//                 const model = await cocoSsd.load();

//                 // Create an image element from the captured image
//                 const imageElement = document.createElement('img');
//                 imageElement.src = capturedImage;

//                 // Make predictions on the image
//                 const predictions = await model.detect(imageElement);

//                 // Set detected objects
//                 setDetectedObjects(predictions);
//                 setLoading(false);

//                 // Log detected objects to the console
//                 console.log('Detected objects:', predictions);
//             } catch (error) {
//                 console.error('Error detecting objects:', error);
//                 setLoading(false);
//             }
//         };

//         // Call detectObjects when capturedImage changes
//         if (capturedImage) {
//             detectObjects();
//         }
//     }, [capturedImage]);

//     // Function to calculate total bill
//     const calculateTotalBill = () => {
//         let totalBill = 0;
//         detectedObjects.forEach(object => {
//             const price = objectPrices[object.class];
//             if (price) {
//                 totalBill += price;
//             }
//         });
//         return totalBill.toFixed(2); // Round to 2 decimal places
//     };

//     // Function to draw frames around detected objects on the image
//     const drawFrames = () => {
//         const canvas = document.getElementById('canvas');
//         const context = canvas.getContext('2d');

//         // Draw the image on the canvas
//         const imageElement = document.createElement('img');
//         imageElement.src = capturedImage;
//         imageElement.onload = () => {
//             canvas.width = imageElement.width;
//             canvas.height = imageElement.height;
//             context.drawImage(imageElement, 0, 0);

//             // Draw frames around detected objects
//             detectedObjects.forEach(object => {
//                 context.beginPath();
//                 context.rect(object.bbox[0], object.bbox[1], object.bbox[2], object.bbox[3]);
//                 context.lineWidth = 2;
//                 context.strokeStyle = 'red';
//                 context.fillStyle = 'red';
//                 context.stroke();
//                 context.fillText(object.class, object.bbox[0], object.bbox[1] > 10 ? object.bbox[1] - 5 : 10);
//             });
//         };
//     };

//     // Call drawFrames when detectedObjects or capturedImage changes
//     useEffect(() => {
//         if (detectedObjects.length > 0 && capturedImage) {
//             drawFrames();
//         }
//     }, [detectedObjects, capturedImage]);

//     // Mapping of detected objects to prices
//     const objectPrices = {
//         tv: 1.5,
//         keyboard: 0.75,
        
//         // Add more objects and their prices as needed
//     };

//     return (
//         <div className="object-detection-container">
//             <h2>Detected Objects:</h2>
//             {loading ? (
//                 <p>Detecting objects...</p>
//             ) : (
//                 <canvas id="canvas" className="object-detection-canvas"></canvas>
//             )}
//             {/* Display total bill */}
//             <h2>Total Bill: ${calculateTotalBill()}</h2>
//         </div>
//     );
// };

// export default ObjectDetection;

