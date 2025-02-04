'use client'
import { useState } from "react";

const CheckoutPage: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // Retrieve checkout data from localStorage
            const checkoutData = JSON.parse(localStorage.getItem('checkoutData') || '[]');
            console.log("Checkout Data:", checkoutData); // Debugging

            if (!Array.isArray(checkoutData) || checkoutData.length === 0) {
                throw new Error("No items in the cart");
            }

            const response = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ product: checkoutData }), // Send the array of products
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url; // Redirect to Stripe Checkout
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Pak Chair Checkout</h1>
            <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                disabled={loading}
            >
                {loading ? "Redirecting..." : "Checkout"}
            </button>
        </div>
    );
};

export default CheckoutPage;