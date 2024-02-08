import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import SecondScreen from '../../Screens/SecondScreen/SecondScreen';
import './CaptureImage.css'; // Import the CSS file for styling



const CaptureImage = () => {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSecondScreen, setShowSecondScreen] = useState(false);

    const capture = async () => {
        setLoading(true);
        //const imageSrc = webcamRef.current.getScreenshot();
        const imageSrc = '/pizza.jpg';
        setCapturedImage(imageSrc );
        setLoading(false);
        setShowSecondScreen(true); // Show the second screen
    };

    return (
        <div className="capture-image-container">
            
           
           
           
            {showSecondScreen ? ( // Render the second screen if showSecondScreen is true
                <SecondScreen capturedImage={capturedImage} />
            ) : (
                <div>



<h1 className="welcome-message">Welcome!</h1>
      <h1 className="header">Webcam Image Capture</h1>
           
           
      <h1 className="">Put Your Tray Here</h1>






                    <div className="webcam-container">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="webcam"
                        />
                    </div>
                    {loading ? (
                        <p className="loading-text">Capturing image...</p>
                    ) : (
                        <button className="capture-button" onClick={capture}>Capture Image</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default CaptureImage;

