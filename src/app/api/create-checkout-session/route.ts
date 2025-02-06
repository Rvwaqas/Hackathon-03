import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// POST handler
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse JSON body
        const { product } = body; // `product` is now an array of items

        // Ensure `product` is an array
        if (!Array.isArray(product)) {
            return NextResponse.json(
                { error: "Invalid product data format" },
                { status: 400 }
            );
        }

        // Create line items for each product
        const line_items = product.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name, // Use item.name
                },
                unit_amount: item.price * 100, // Use item.price
            },
            quantity: item.quantity, // Use item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe Error:", error); // Log the error for debugging
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}