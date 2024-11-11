'use client'


import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ThankYouPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6] p-6">
            <motion.div 
                className="max-w-md w-full p-8 bg-white rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-bold text-[#045B2E] text-center mb-4">
                    Thank You for Booking!
                </h1>
                <p className="text-center text-gray-700 mb-6">
                    Your 1-on-1 clarity call has been successfully scheduled.
                    We look forward to connecting with you soon.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#FF6801] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-xl font-medium text-[#045B2E]">
                        Your booking is confirmed!
                    </p>
                </motion.div>

                <p className="text-center text-gray-600 mb-6">
                    You&apos;ll receive an email with all the details about your clarity call.
                    In the meantime, feel free to explore our services or contact us if you need further assistance.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center"
                >
                    <Link
                        href="/booking"
                        className="w-full py-3 px-3 font-bold text-white bg-[#045B2E] rounded-md shadow-md hover:bg-[#034322] transition-colors duration-300 transform hover:scale-105"
                    >
                        Back to Booking
                    </Link>
                </motion.div>

                <div className="text-center mt-6">
                    <Link href="/" className="text-sm text-[#FF6801] hover:underline">
                        Return to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYouPage;
