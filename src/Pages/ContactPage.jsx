import React from 'react';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    ChatBubbleLeftEllipsisIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const ContactPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
                        <div className="flex items-center space-x-3">
                            <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">support@example.com</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <PhoneIcon className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">+91 98765 43210</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <MapPinIcon className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">Bangalore, India</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <ClockIcon className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">Mon - Fri, 9 AM - 6 PM</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                <PaperAirplaneIcon className="h-4 w-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
