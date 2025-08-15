import React, { useState } from 'react';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.id]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
    };

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
                        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                <PaperAirplaneIcon className="h-4 w-4 mr-2" />
                                Send Message
                            </button>
                        </form>

                        {submitted && (
                            <p className="mt-4 text-green-600 font-medium">
                                ✅ Thank you! Your message has been sent.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
