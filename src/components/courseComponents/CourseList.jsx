import React from 'react';
import { BookOpenIcon, PlusIcon} from '@heroicons/react/24/outline';
import CourseCard from './CourseCard';
import Button from '../Button';

const CourseList = ({ courses, onEdit, onDelete, onAddCourse }) => {
    if (courses.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpenIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No courses found
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Get started by adding your first course or try adjusting your search and filter criteria.
                </p>
                <Button onClick={onAddCourse} className="inline-flex items-center">
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Add Your First Course
                </Button>
            </div>
        );
    }

    return (
        <>
            {/* Course Count */}
            <div className="mb-4">
                <p className="text-sm text-gray-600">
                    Showing {courses.length} course{courses.length === 1 ? '' : 's'}
                </p>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </>
    );
};

export default CourseList;