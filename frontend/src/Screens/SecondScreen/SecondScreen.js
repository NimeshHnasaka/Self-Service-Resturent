// import React from 'react';

// const SecondScreen = ({ capturedImage, detectedItems }) => {
//     return (
//         <div>
//             <h1>Second Screen</h1>
//             <div>
//                 {/* Display the captured image */}
//                 {capturedImage && (
//                     <div>
//                         <h2>Captured Image:</h2>
//                         <img src={capturedImage} alt="Captured" />
//                     </div>
//                 )}
//                 {/* Display detected food items */}
//                 {detectedItems.length > 0 && (
//                     <div>
//                         <h2>Detected Food Items:</h2>
//                         <ul>
//                             {detectedItems.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SecondScreen;

// import React, { useEffect, useState } from 'react';

// const SecondScreen = ({ capturedImage }) => {
//     const [detectedItems, setDetectedItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Function to detect objects in the captured image
//         const detectObjects = async () => {
//             try {
//                 // Load the model
//                 const model = await window.mobilenet.load();
                
//                 // Create an image element from the captured image
//                 const imageElement = document.createElement('img');
//                 imageElement.src = capturedImage;
                
//                 // Make predictions on the image
//                 const predictions = await model.classify(imageElement);
                
//                 // Extract labels from predictions
//                 const detectedObjects = predictions.map(prediction => prediction.className);
                
//                 // Set detected objects
//                 setDetectedItems(detectedObjects);
//                 setLoading(false);

//                 // Log detected objects to the console
//                 console.log('Detected objects:', detectedObjects);
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
//             <h1>Second Screen</h1>
//             {loading ? (
//                 <p>Detecting objects...</p>
//             ) : (
//                 <div>
//                     {/* Display the captured image */}
//                     {capturedImage && (
//                         <div>
//                             <h2>Captured Image:</h2>
//                             <img src={capturedImage} alt="Captured" />
//                         </div>
//                     )}
//                     {/* Display detected objects */}
//                     <div>
//                         <h2>Detected Objects:</h2>
//                         <ul>
//                             {detectedItems.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SecondScreen;


import React from 'react';

import './SecondScreen.css'; // Import the CSS file
import ObjectDetection from '../../Components/ObjectDetection/ObjectDetection';



const SecondScreen = ({ capturedImage}) => {

    
    return (
        <div className="SecondScreenContainer">
            <h1>Second Screen</h1>
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





