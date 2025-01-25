import { NextResponse } from 'next/server';
import  { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p6xa7tg5', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use the correct API version
  token: process.env.SANITY_WRITE_TOKEN, // Add your token to .env.local
  useCdn: false, // Disable CDN for writes
});

export async function POST(req) {
  try {
    const { name, email, subject,message } = await req.json();

    // Send data to Sanity
    await client.create({
      _type: 'contact',
      name,
      email,
      subject,
      message,
     
    });

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
