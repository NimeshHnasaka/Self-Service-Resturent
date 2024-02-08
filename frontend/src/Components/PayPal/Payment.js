


import React, { useEffect, useState } from 'react';

const Payment = ({ totalBill, referenceNumber }) => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    useEffect(() => {
        // Load the PayPal script when the component mounts
        const addPayPalScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=AWG795VHTb_d1tsRKfMZ4_-K2J93C5fy_pTV5Vgz99igeQJTQXgcZOuosUyqoKDkydCllw1R4uf95tPv`;
            script.addEventListener('load', () => {
                // Once the script is loaded, initialize the PayPal buttons
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: totalBill
                                }
                            }]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        // Handle payment success
                        handlePaymentSuccess(order);
                    },
                    onError: (err) => {
                        // Handle payment error
                        handlePaymentError(err);
                    }
                }).render('#paypal-button-container');
            });
            document.body.appendChild(script);
        };

        addPayPalScript();

        // Clean up function to remove the PayPal script when the component unmounts
        return () => {
            const script = document.querySelector('script[src^="https://www.paypal.com/sdk/js"]');
            if (script) {
                script.remove();
            }
        };
    }, [totalBill]);

    // Function to handle payment success
    const handlePaymentSuccess = (order) => {
        console.log("Payment successful!");
        console.log(order);
        // Update payment success state
        setPaymentSuccess(true);

        // Reload the page after a short delay
        setTimeout(() => {
            window.location.reload();
        }, 4000); // Adjust the delay as needed
    };

    // Function to handle payment failure
    const handlePaymentError = (err) => {
        console.error("Payment failed:", err);
        // Update payment error state
        setPaymentError(err);
    };

    // Function to retry payment
    const retryPayment = () => {
        setPaymentSuccess(false);
        setPaymentError(null);
    };

    return (
        <div>
            <h2>Payment Information</h2>
            <p>Total Bill: ${totalBill}</p>
            <p>Reference Number: {referenceNumber}</p>
            <div id="paypal-button-container"></div>
            {paymentSuccess && <p>Payment Successful!</p>}
            {paymentError && (
                <div>
                    <p>Payment Failed. Please try again later.</p>
                    <button onClick={retryPayment}>Retry Payment</button>
                </div>
            )}
        </div>
    );
};

export default Payment;
