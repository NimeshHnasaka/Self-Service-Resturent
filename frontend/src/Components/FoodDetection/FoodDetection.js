// import React, { useEffect, useState } from 'react';

// const FoodDetection = ({ capturedImage }) => {
//     const [detectedItems, setDetectedItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Function to detect objects in the captured image
//         const detectObjects = async () => {
//             try {
//                 // Replace this with your object detection logic
//                 // For example, you can use a pre-trained model like TensorFlow.js
//                 // Here's a sample code using TensorFlow.js:
//                 const model = await window.mobilenet.load();
//                 const imageElement = document.createElement('img');
//                 imageElement.src = capturedImage;
//                 const predictions = await model.classify(imageElement);
                
//                 // Extract labels from predictions
//                 const detectedObjects = predictions.map(prediction => prediction.className);
                
//                 // Set detected objects
//                 setDetectedItems(detectedObjects);
//                 setLoading(false);
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

//     return (
//         <div>
//             <h1>Food Detection</h1>
//             {loading ? (
//                 <p>Detecting objects...</p>
//             ) : (
//                 <div>
//                     <h2>Detected Objects:</h2>
//                     <ul>
//                         {detectedItems.map((item, index) => (
//                             <li key={index}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FoodDetection;