'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Input } from '@/components/ui/input';

const SchedulePage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const availableTimes = [
        "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
    ];

    const handleBookingConfirmation = () => {
        if (!selectedDate || !selectedTime) {
            toast.error("Please select a date and time.");
            return;
        }


        toast.success("Your call has been scheduled successfully!", {
            position: 'top-center',
            style: { fontSize: '14px', padding: '10px' }
        });

        setTimeout(() => {
            
            window.location.href = "/thank-you";
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6] p-6">
            <ToastContainer />
            <motion.div
                className="max-w-md w-full p-8 bg-white rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-2xl font-bold text-[#045B2E] text-center mb-4">
                    Schedule Your Call
                </h1>
                <p className="text-center text-gray-700 mb-6">
                    Select a date and time for your 1-on-1 clarity call.
                </p>

                <div>
                    <label className="block font-medium text-gray-600 mb-2">Input Your Name</label>
                    <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='text-black'
                    />

                </div>
                <div>
                    <label className="block font-medium text-gray-600 mb-2">Input Your Email</label>
                    <Input
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='text-black'
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-600 mb-2">Input Your Contact</label>
                    <Input
                        type="text"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='text-black'
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium text-gray-600 mb-2">Choose a Date</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date: any) => setSelectedDate(date)}
                        className="w-full p-3 px- border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6801] text-black"
                        minDate={new Date()}
                        placeholderText="Select Date"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium text-gray-600 mb-2">Available Times</label>
                    <div className="grid grid-cols-2 gap-4">
                        {availableTimes.map((time, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 rounded-md font-semibold text-sm ${selectedTime === time
                                        ? "bg-[#FF6801] text-white"
                                        : "bg-gray-200 text-gray-700"
                                    } transition-colors duration-200 transform hover:scale-105`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {time}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <motion.button
                    className="w-full py-3 font-bold text-white bg-[#045B2E] rounded-md shadow-md hover:bg-[#034322] transition-colors duration-300 transform hover:scale-105"
                    onClick={handleBookingConfirmation}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Confirm Booking
                </motion.button>
            </motion.div>
        </div>
    );
};

export default SchedulePage;
