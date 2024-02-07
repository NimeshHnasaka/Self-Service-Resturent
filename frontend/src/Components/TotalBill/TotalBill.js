// import React from 'react';

// const TotalBill = ({ detectedObjects, objectPrices }) => {
//     // Function to calculate total bill
//     const calculateTotalBill = () => {
//         let totalBill = 0;
//         detectedObjects.forEach(object => {
//             const price = objectPrices[object];
//             if (price) {
//                 totalBill += price;
//             }
//         });
//         return totalBill.toFixed(2); // Round to 2 decimal places
//     };

//     // Function to generate a reference number with date and time
//     const generateReferenceNumber = () => {
//         const prefix = 'REF-';
//         const currentDate = new Date();
//         const formattedDate = currentDate.toISOString().replace(/[-:]/g, '').slice(0, -5); // Format date as YYYYMMDDHHMM
//         const numericString = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generate a random 4-digit number
//         return prefix + formattedDate + numericString;
//     };

//     // Function to handle confirm button click
//     const handleConfirmClick = () => {
//         // Here you can implement the logic for what should happen when the confirm button is clicked
//         // For now, let's console log the data
//         const totalBill = calculateTotalBill();
//         const referenceNumber = generateReferenceNumber();
//         console.log("Detected Objects:", detectedObjects);
//         console.log("Object Prices:", objectPrices);
//         console.log("Total Bill:", totalBill);
//         console.log("Reference Number:", referenceNumber);
//     };

//     return (
//         <div>
//             <h2>Total Bill: ${calculateTotalBill()}</h2>
//             <p>Reference Number: {generateReferenceNumber()}</p>
//             <button onClick={handleConfirmClick}>Confirm My Order</button>
//         </div>
//     );
// };

// export default TotalBill;




import React, { useState } from 'react';
import ThirdScreen from '../../Screens/ThiredScreen/ThiredScreen';
 // Assuming ThirdScreen component is in the same directory

const TotalBill = ({ detectedObjects, objectPrices }) => {
   
   
   
  // Function to count the occurrences of each detected object
  const countObjectQuantity = () => {
    const objectQuantity = {};
    detectedObjects.forEach(object => {
        objectQuantity[object] = (objectQuantity[object] || 0) + 1;
    });
    return objectQuantity;
};


   
   
   
    const [confirmed, setConfirmed] = useState(false);
    
    
    const objectQuantity = countObjectQuantity();
    // Function to calculate total bill
    const calculateTotalBill = () => {
        let totalBill = 0;
        detectedObjects.forEach(object => {
            const price = objectPrices[object];
            const quantity = objectQuantity[object];
            
            
            if (price) {
                totalBill += price * quantity ;
            }
        });
        return totalBill.toFixed(2); // Round to 2 decimal places
    };

    // Function to generate a reference number with date and time
    const generateReferenceNumber = () => {
        const prefix = 'REF-';
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().replace(/[-:]/g, '').slice(0, -5); // Format date as YYYYMMDDHHMM
        const numericString = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generate a random 4-digit number
        return prefix + formattedDate + numericString;
    };

    // Function to handle confirm button click
    const handleConfirmClick = () => {
        // Here you can implement the logic for what should happen when the confirm button is clicked
        // For now, let's set confirmed to true
        setConfirmed(true);
    };

    if (confirmed) {
        const totalBill = calculateTotalBill();
        const referenceNumber = generateReferenceNumber();
        return (
            <ThirdScreen
                detectedObjects={detectedObjects}
                objectPrices={objectPrices}
                totalBill={totalBill}
                referenceNumber={referenceNumber}
            />
        );
    }

    return (
        <div>
            <h2>Total Bill: ${calculateTotalBill()}</h2>
            <button onClick={handleConfirmClick}>Confirm</button>
        </div>
    );
};

export default TotalBill;