import React from 'react';
import {
    PencilSquareIcon,
    TrashIcon,
    CalendarIcon,
    TagIcon
} from '@heroicons/react/24/outline';
import { LEVEL_COLORS, STATUS_COLORS } from '../../utils/Mockdata';

const CourseCard = ({ course, onEdit, onDelete }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="p-6">
                {/* Header with Title and Actions */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1 mr-2">
                        {course.title}
                    </h3>
                    <div className="flex space-x-1 flex-shrink-0">
                        <button
                            onClick={() => onEdit(course)}
                            className="p-1 text-gray-400 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
                            aria-label={`Edit ${course.title}`}
                        >
                            <PencilSquareIcon className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => onDelete(course.id)}
                            className="p-1 text-gray-400 hover:text-red-600 focus:outline-none focus:text-red-600 transition-colors"
                            aria-label={`Delete ${course.title}`}
                        >
                            <TrashIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[course.level]}`}>
                        {course.level}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[course.status]}`}>
                        {course.status}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {course.category}
                    </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={`${course.id}-tag-${index}`}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-50 text-blue-700"
                        >
                            <TagIcon className="h-3 w-3 mr-1" />
                            {tag}
                        </span>
                    ))}
                    {course.tags.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                            +{course.tags.length - 3} more
                        </span>
                    )}
                </div>

                {/* Date */}
                <div className="flex items-center text-xs text-gray-500">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <span>Created {formatDate(course.dateCreated)}</span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
