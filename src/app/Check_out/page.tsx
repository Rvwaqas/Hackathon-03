


'use client'
import { useState } from "react";

const CheckoutPage: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // Define the product data to send in the request body
            const product = {
                name: "Sample Product", // Replace with your product name
                price: 1000, // Replace with your product price (in cents)
            };

            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ product }), // Send product data in the request body
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
            <h1 className="text-2xl font-bold mb-4">Stripe Hosted Checkout</h1>
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