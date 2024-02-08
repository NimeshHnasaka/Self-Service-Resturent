import React from 'react';


const ThirdScreen = ({ detectedObjects, objectPrices, totalBill, referenceNumber }) => {
    
    
    const handleConfirmOrder = () => {
        // Add logic here to handle order confirmation
        console.log('Order confirmed!');
    };
    
    
    return (
        <div>
          <h1>Thired Screen</h1>
           
            <h2>Order Details</h2>
            <p><strong>Detected Objects:</strong> {detectedObjects.join(', ')}</p>
            <p><strong>Object Prices:</strong></p>
           
           
            <ul>
                {Object.keys(objectPrices).map(object => (
                    <li key={object}>{object}: ${objectPrices[object]}</li>
                ))}
            </ul>
            <p><strong>Total Bill:</strong> ${totalBill}</p>
            <p><strong>Reference Number:</strong> {referenceNumber}</p>
       
        <button onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
    );
};

export default ThirdScreen;