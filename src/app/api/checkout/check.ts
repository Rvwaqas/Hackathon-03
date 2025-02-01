import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, );

// POST handler
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse JSON body
        const { product } = body; // Destructure the product object

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name, // Use the product name from the request
                        },
                        unit_amount: product.price, // Use the product price from the request (in cents)
                    },
                    quantity: 1, // Set the quantity
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`, // Redirect URL after successful payment
            cancel_url: `${req.headers.get("origin")}/cancel`, // Redirect URL if payment is canceled
        });

        // Return the Stripe Checkout URL
        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}