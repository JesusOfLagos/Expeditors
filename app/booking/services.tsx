'use client'


import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'; 
const BookingPage = () => {
    const handleBookingClick = () => {
        toast.success("Redirecting to booking page...");
        setTimeout(() => {
            window.location.href = "/schedule";
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6] p-6">
            <ToastContainer />
            <motion.div 
                className="max-w-lg w-full p-10 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-bold text-[#045B2E] text-center mb-2">
                    1-on-1 Clarity Call
                </h1>
                <h2 className="text-lg font-semibold text-[#FF6801] text-center mb-4">
                    Still have more questions?
                </h2>
                <p className="text-gray-700 text-center mb-6">
                    You can schedule a free 1-on-1 clarity call with me to answer any questions you may have before signing up for our offers.
                </p>

                <div className="text-gray-600 space-y-4 mb-8 leading-relaxed text-sm text-center">
                    <p>If there are still pending questions you have…</p>
                    <p>It could be about the payments, or about the program, or even about the structure of the program…</p>
                    <p>No matter what the question may be, I will be more than happy to provide you with the clarity you need before you join the Super Expeditors community.</p>
                    <p>Just click the button below and let’s chat!</p>
                </div>

                <motion.button 
                    className="w-full py-3 font-bold text-white bg-[#FF6801] rounded-md shadow-md hover:bg-[#d75a00] transition-colors duration-300 transform hover:scale-105"
                    onClick={handleBookingClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book A Call
                </motion.button>
            </motion.div>
        </div>
    );
};

export default BookingPage;
