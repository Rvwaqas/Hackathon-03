


'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
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
    if(formData.name==''&& formData.email===''&& formData.message==='' && formData.subject===''){
        alert('Fill the Filed!');
        setIsSubmitting(false);
    }else{
        setIsSubmitting(true);
    
    

    try {
      const response = await fetch('/api/submitContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
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
}
  return (
    <>
      <div className="w-[100%] min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="w-[100%] h-[190px] md:h-[300px] relative">
          <div className="w-[100%] h-[190px] md:h-[350px] absolute object-cover bg-cover">
            <Image
              src="/Rectangle.png"
              alt="sa"
              width={700}
              height={350}
              className="w-[100%] h-[190px] md:h-[350px]"
            />
          </div>
          <div className="absolute w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center">
            <h1 className="text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]">
              Contact
            </h1>
            <div className="flex gap-2 mt-[1px]">
              <span className="text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold">
                Home
              </span>
              <span>
                <IoIosArrowForward className="text-[12px] font-semibold md:text-[14px] mt-[2px] md:mt-[5px]" />
              </span>
              <span className="md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]">
                Contact
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-[100%] m-auto h-[900px] pt-20 mt-11">
          <div className="w-[640px] h-[48px] m-auto">
            <h1 className="font-semibold text-[16px] md:text-[36px] leading-[54px] text-center">
              Get In Touch With Us
            </h1>
            <p className="text-[12px] md:text-[16px] leading-[24px] font-normal text-center text-[#9F9F9F]">
              For More Information About Our Product & Services. Please Feel Free
              To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
              Not Hesitate!
            </p>
          </div>

          <div className=" w-[60%] h-[700px] mt-16 m-auto  rounded-md text-white  bg-black">
            {/* Contact Form */}
            <div className="w-[100%] h-[900px] flex flex-col gap-1 justify-center items-center">
              <form onSubmit={handleSubmit} className="w-[530px] h-[730px]">
                {/* Form Fields */}
                <div className="w-[90%] m-auto h-[121px] flex flex-col space-y-2">
                  <label className="text-[16px] font-medium leading-[24px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="abc"
                    className="px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[60px] rounded-sm"
                  />
                </div>
                <div className="w-[90%] m-auto h-[121px] flex flex-col space-y-2">
                  <label className="text-[16px] font-medium leading-[24px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ABC@def.com"
                    className="px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[60px] rounded-sm"
                  />
                </div>
                <div className="w-[90%] m-auto h-[121px] flex flex-col space-y-2">
                  <label className="text-[16px] font-medium leading-[24px]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="This is an optional"
                    className="px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[60px] rounded-sm"
                  />
                </div>
                <div className="w-[90%] m-auto h-[121px] flex flex-col space-y-2">
                  <label className="text-[16px] font-medium leading-[24px]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="This is an optional"
                    className="px-5 py-7 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[120px] rounded-lg"
                  />
                </div>
                <div className="bg-[#B88E2F] hover:bg-green-700 m-auto w-[250px] h-[55px] rounded-[5px] border mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-center w-[250px] h-[55px] font-normal text-[16px] leading-[24px] py-4 text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Page;



