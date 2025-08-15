import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <AcademicCapIcon className="h-6 w-6 text-blue-400" />
                            <span className="text-lg font-bold">CareerSuite.ai</span>
                        </div>
                        <p className="text-gray-300 text-sm">Empowering Talent. Enabling Growth.</p>
                        <p className="text-gray-400 text-xs">AI-powered career growth ecosystem for modern professionals.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/help-center" className="text-gray-300 hover:text-white text-sm transition-colors">Help Center</Link></li>
                            <li><Link to="/docs" className="text-gray-300 hover:text-white text-sm transition-colors">Documentation</Link></li>
                            <li><Link to="/api" className="text-gray-300 hover:text-white text-sm transition-colors">API</Link></li>
                            <li><Link to="/status" className="text-gray-300 hover:text-white text-sm transition-colors">Status</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-300 text-sm">hello@careersuite.ai</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <PhoneIcon className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPinIcon className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-300 text-sm">San Francisco, CA</span>
                            </div>
                            <div className="flex space-x-3 pt-2">
                                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub"><GithubIcon className="h-4 w-4" /></a> */}
                                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedinIcon className="h-4 w-4" /></a> */}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400 text-sm">
                        © {currentYear} CareerSuite.ai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
