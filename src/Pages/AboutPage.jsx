import React from 'react';
import {
    AcademicCapIcon,
    UsersIcon,
    BookOpenIcon,
    FlagIcon,
    TrophyIcon,
    BoltIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
    const features = [
        {
            icon: AcademicCapIcon,
            title: 'Expert-Designed Courses',
            description:
                'Curriculum designed by industry experts and continuously updated with latest trends and technologies.'
        },
        {
            icon: UsersIcon,
            title: 'Community Driven',
            description:
                'Learn alongside a community of motivated professionals and get guidance from industry mentors.'
        },
        {
            icon: BookOpenIcon,
            title: 'Personalized Learning',
            description:
                'AI-powered recommendations tailored to your career goals, skill level, and learning preferences.'
        }
    ];

    const stats = [
        { number: '50,000+', label: 'Active Learners' },
        { number: '500+', label: 'Expert Instructors' },
        { number: '1,000+', label: 'Course Catalog' },
        { number: '95%', label: 'Success Rate' }
    ];

    const values = [
        {
            icon: FlagIcon,
            title: 'Mission-Driven',
            description:
                'We believe every professional deserves access to world-class career development resources.'
        },
        {
            icon: TrophyIcon,
            title: 'Quality First',
            description:
                'Every course is carefully crafted and reviewed to ensure the highest educational standards.'
        },
        {
            icon: BoltIcon,
            title: 'Innovation',
            description:
                'We leverage cutting-edge AI technology to create personalized learning experiences.'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-100 rounded-full p-4">
                        <AcademicCapIcon className="h-12 w-12 text-blue-600" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    About CareerSuite.ai
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Empowering professionals with AI-driven career growth solutions. We're building
                    the future of professional development, one course at a time.
                </p>
            </div>

            {/* Stats Section */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-700 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        At CareerSuite.ai, we believe that every professional deserves access to personalized,
                        AI-powered tools that accelerate their career growth. Our platform combines cutting-edge
                        technology with human expertise to create tailored learning experiences.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We're committed to democratizing access to high-quality professional development
                        and making career advancement achievable for everyone.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        To become the leading AI-powered career growth ecosystem that transforms how
                        professionals learn, grow, and advance in their careers across all industries.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We envision a world where career development is accessible, personalized, and
                        continuously adapted to the evolving demands of the modern workplace.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why Choose CareerSuite.ai?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We combine the best of technology and education to deliver unparalleled learning experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                                    <Icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-4 text-lg">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The principles that guide everything we do and every decision we make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center mr-3">
                                        <Icon className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-lg">{value.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
                <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
                    <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                        Join thousands of professionals who are already accelerating their career growth with CareerSuite.ai.
                    </p>
                    <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        Explore Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
