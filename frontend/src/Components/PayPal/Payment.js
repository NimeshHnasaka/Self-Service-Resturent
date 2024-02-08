
import React, { useEffect, useState } from 'react';

const Payment = ({ totalBill, referenceNumber }) => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    const initializePayPalSDK = async () => {
        try {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=AWG795VHTb_d1tsRKfMZ4_-K2J93C5fy_pTV5Vgz99igeQJTQXgcZOuosUyqoKDkydCllw1R4uf95tPv&currency=USD`;
            script.async = true;
            script.onload = () => {
                initializePayPalButtons();
            };
            document.body.appendChild(script);
        } catch (error) {
            console.error('Failed to load PayPal SDK:', error);
            setPaymentError('Failed to load PayPal SDK. Please try again later.');
        }
    };

    useEffect(() => {
        initializePayPalSDK();

        return () => {
            const script = document.querySelector('script[src^="https://www.paypal.com/sdk/js"]');
            if (script) {
                script.remove();
            }
        };
    }, [totalBill]);

    const initializePayPalButtons = () => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalBill,
                                currency_code: 'USD'
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    handlePaymentSuccess(order);
                },
                onError: (err) => {
                    handlePaymentError(err);
                }
            })
            .render('#paypal-button-container');
    };

    const handlePaymentSuccess = (order) => {
        console.log("Payment successful!");
        console.log(order);
        setPaymentSuccess(true);
        setTimeout(() => {
            window.location.reload();
        }, 4000); // Reload the page after a short delay
    };

    const handlePaymentError = (err) => {
        console.error("Payment failed:", err);
        setPaymentError('Payment failed. Please try again later.');
    };

    const retryPayment = () => {
        setPaymentSuccess(false);
        setPaymentError(null);
        initializePayPalSDK(); // Re-initialize PayPal SDK
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
                    <p>{paymentError}</p>
                    <button onClick={retryPayment}>Retry Payment</button>
                </div>
            )}
        </div>
    );
};

export default Payment;