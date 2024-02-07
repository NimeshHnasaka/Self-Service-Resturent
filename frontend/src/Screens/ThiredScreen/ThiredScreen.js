import React from 'react';

const ThirdScreen = ({ detectedObjects, objectPrices, totalBill, referenceNumber }) => {
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
        </div>
    );
};

export default ThirdScreen;