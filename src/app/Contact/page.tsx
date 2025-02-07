

'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      alert('Fill all fields!');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submitContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-48 md:h-72">
        <Image src="/Rectangle.png" alt="Hero" layout="fill" objectFit="cover" />
        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40">
          <h1 className="text-white text-2xl md:text-4xl font-bold">Contact</h1>
          <div className="flex gap-2 mt-1 text-white text-sm md:text-base">
            <span>Home</span>
            <IoIosArrowForward className="mt-1" />
            <span>Contact</span>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="w-full px-4 md:px-0 flex flex-col items-center py-12">
        <h1 className="text-lg md:text-3xl font-semibold text-center">Get In Touch With Us</h1>
        <p className="text-sm md:text-base text-gray-500 text-center max-w-lg">
          For more information about our products & services, please feel free to drop us an email. Our staff is always here to help!
        </p>

        <div className="w-full max-w-lg mt-10 bg-black text-white p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-sm md:text-base">Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 text-black rounded-md" placeholder="Enter your name" />
            
            <label className="text-sm md:text-base">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 text-black rounded-md" placeholder="Enter your email" />
            
            <label className="text-sm md:text-base">Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 text-black rounded-md" placeholder="Enter a subject" />
            
            <label className="text-sm md:text-base">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 text-black rounded-md" placeholder="Enter your message"></textarea>
            
            <button type="submit" disabled={isSubmitting} className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-md text-center w-full">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
