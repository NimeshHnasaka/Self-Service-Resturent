// import React from 'react';

// const Payment = ({ totalBill, referenceNumber }) => {
//     // Function to handle payment success
//     const handlePaymentSuccess = () => {
//         console.log("Payment successful!"); // You can add your payment success logic here
//     };

//     // Function to handle payment failure
//     const handlePaymentError = () => {
//         console.error("Payment failed."); // You can add your payment failure logic here
//     };

//     return (
//         <div>
//             <h2>Payment Information</h2>
//             <p>Total Bill: ${totalBill}</p>
//             <p>Reference Number: {referenceNumber}</p>
//             <button onClick={handlePaymentSuccess}>Pay Now</button>
//             <button onClick={handlePaymentError}>Cancel Payment</button>
//         </div>
//     );

// };

// export default Payment;


// import React, { useEffect } from 'react';

// const Payment = ({ totalBill, referenceNumber }) => {
//     useEffect(() => {
//         // Load the PayPal script when the component mounts
//         const addPayPalScript = () => {
//             const script = document.createElement('script');
//             script.src = `https://www.paypal.com/sdk/js?client-id=AWG795VHTb_d1tsRKfMZ4_-K2J93C5fy_pTV5Vgz99igeQJTQXgcZOuosUyqoKDkydCllw1R4uf95tPv`;
//             script.addEventListener('load', () => {
//                 // Once the script is loaded, initialize the PayPal buttons
//                 window.paypal.Buttons({
//                     createOrder: (data, actions) => {
//                         return actions.order.create({
//                             purchase_units: [{
//                                 amount: {
//                                     value: totalBill
//                                 }
//                             }]
//                         });
//                     },
//                     onApprove: async (data, actions) => {
//                         const order = await actions.order.capture();
//                         // Handle payment success
//                         handlePaymentSuccess(order);
//                     },
//                     onError: (err) => {
//                         // Handle payment error
//                         handlePaymentError(err);
//                     }
//                 }).render('#paypal-button-container');
//             });
//             document.body.appendChild(script);
//         };

//         addPayPalScript();

//         // Clean up function to remove the PayPal script when the component unmounts
//         return () => {
//             const script = document.querySelector('script[src^="https://www.paypal.com/sdk/js"]');
//             if (script) {
//                 script.remove();
//             }
//         };
//     }, [totalBill]);

//     // Function to handle payment success
//     const handlePaymentSuccess = (order) => {
//         console.log("Payment successful!");
//         console.log(order);
//         // You can add your payment success logic here
//     };

//     // Function to handle payment failure
//     const handlePaymentError = (err) => {
//         console.error("Payment failed:", err);
//         // You can add your payment failure logic here
//     };

//     return (
//         <div>
//             <h2>Payment Information</h2>
//             <p>Total Bill: ${totalBill}</p>
//             <p>Reference Number: {referenceNumber}</p>
//             <div id="paypal-button-container"></div>
//         </div>
//     );
// };

// export default Payment;


// import React, { useEffect, useState } from 'react';

// const Payment = ({ totalBill, referenceNumber }) => {
//     const [paymentSuccess, setPaymentSuccess] = useState(false);
//     const [paymentError, setPaymentError] = useState(null);

//     useEffect(() => {
//         // Load the PayPal script when the component mounts
//         const addPayPalScript = () => {
//             const script = document.createElement('script');
//             script.src = `https://www.paypal.com/sdk/js?client-id=AWG795VHTb_d1tsRKfMZ4_-K2J93C5fy_pTV5Vgz99igeQJTQXgcZOuosUyqoKDkydCllw1R4uf95tPv`;
//             script.addEventListener('load', () => {
//                 // Once the script is loaded, initialize the PayPal buttons
//                 window.paypal.Buttons({
//                     createOrder: (data, actions) => {
//                         return actions.order.create({
//                             purchase_units: [{
//                                 amount: {
//                                     value: totalBill
//                                 }
//                             }]
//                         });
//                     },
//                     onApprove: async (data, actions) => {
//                         const order = await actions.order.capture();
//                         // Handle payment success
//                         handlePaymentSuccess(order);
//                     },
//                     onError: (err) => {
//                         // Handle payment error
//                         handlePaymentError(err);
//                     }
//                 }).render('#paypal-button-container');
//             });
//             document.body.appendChild(script);
//         };

//         addPayPalScript();

//         // Clean up function to remove the PayPal script when the component unmounts
//         return () => {
//             const script = document.querySelector('script[src^="https://www.paypal.com/sdk/js"]');
//             if (script) {
//                 script.remove();
//             }
//         };
//     }, [totalBill]);

//     // Function to handle payment success
//     const handlePaymentSuccess = (order) => {
//         console.log("Payment successful!");
//         console.log(order);
//         // Update payment success state
//         setPaymentSuccess(true);
//     };

//     // Function to handle payment failure
//     const handlePaymentError = (err) => {
//         console.error("Payment failed:", err);
//         // Update payment error state
//         setPaymentError(err);
//     };

//     return (
//         <div>
//             <h2>Payment Information</h2>
//             <p>Total Bill: ${totalBill}</p>
//             <p>Reference Number: {referenceNumber}</p>
//             <div id="paypal-button-container"></div>
//             {paymentSuccess && <p>Payment Successful!</p>}
//             {paymentError && <p>Payment Failed. Please try again later.</p>}
//         </div>
//     );
// };

// export default Payment;