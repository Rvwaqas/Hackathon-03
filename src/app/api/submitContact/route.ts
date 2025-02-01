// src/app/api/submitContact/route.ts
import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

const client = createClient({
  projectId: 'p6xa7tg5', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  token: 'skANOzVgsyth33DUHKtpUGxyEJQrzG44FpmTjnnan2YjqUsZPm6qhyxzIvosGLtYozM3m1p48AlORiaztZZmz0RFIk5wOu8s2VQDh5NbcKJboJuqK2cCdZhjawptqDGjZcMoYsvVy8E1gW1riAIxbVVVrHGyGvCjvBOAwP6N3rBeXOArmuSL', // Replace with your Sanity write token
  useCdn: false, // Ensure fresh data
  apiVersion: '2025-01-30', // Add the API version
});

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create a new document in Sanity
    const result = await client.create({
      _type: 'contactForm',
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully!', result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting form to Sanity:', error);
    return NextResponse.json(
      { message: 'Failed to submit the form.' },
      { status: 500 }
    );
  }
}