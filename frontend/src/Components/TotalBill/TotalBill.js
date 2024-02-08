

import React, { useState } from 'react';
import Payment from '../PayPal/Payment'; // Assuming Payment component is imported correctly

const TotalBill = ({ objectQuantity }) => {
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    // Mapping of detected objects to prices
    const objectPrices = {
        tv: 1.5,
        keyboard: 0.75,
        donut: 10.00,
        pizza: 20.00
        // Add more objects and their prices as needed
    };

    // Function to calculate total bill
    const calculateTotalBill = (objectQuantity) => {
        let bill = 0;
        for (const object in objectQuantity) {
            const quantity = objectQuantity[object];
            const price = objectPrices[object];
            const totalPrice = quantity * price;
            bill += totalPrice;
        }
        return bill.toFixed(2); // Ensure the bill is rounded to two decimal places
    };

    // Calculate the total bill
    const totalBill = calculateTotalBill(objectQuantity);

    // Function to generate a reference number with date and time
    const generateReferenceNumber = () => {
        const prefix = 'REF-';
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().replace(/[-:]/g, '').slice(0, -5); // Format date as YYYYMMDDHHMM
        const numericString = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generate a random 4-digit number
        return prefix + formattedDate + numericString;
    };

    // State to store the reference number
    const [referenceNumber] = useState(generateReferenceNumber());

    // Function to handle confirm button click
    const handleConfirmClick = () => {
        console.log("Total Bill:", totalBill);
        console.log("Reference Number:", referenceNumber);
        console.log("Order Confirmed");
        setOrderConfirmed(true); // Set order confirmed to true
    };

    return (
        <>
            {!orderConfirmed ? (
                <div>
                    <h1>Total Bill </h1>
                    <h2>Food Items</h2>
                    <ul>
                        {Object.entries(objectQuantity).map(([object, quantity]) => (
                            <li key={object}>
                                {object} -  Price: ${objectPrices[object]} - Quantity: {quantity} - Total: ${(quantity * objectPrices[object]).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <h2>Total Bill: ${totalBill}</h2>
                    <p>Reference Number: {referenceNumber}</p>
                    <button onClick={handleConfirmClick}>Confirm My Order</button>
                </div>
            ) : (
                <Payment totalBill={totalBill} referenceNumber={referenceNumber} />
            )}
        </>
    );
};

export default TotalBill;