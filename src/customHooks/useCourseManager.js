import { useState, useEffect } from 'react';
import { INITIAL_COURSES } from '../utils/Mockdata';

const STORAGE_KEY = 'courses';

const useCourseManager = () => {
    
    const [courses, setCourses] = useState(() => {
        try {
            const savedCourses = localStorage.getItem(STORAGE_KEY);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_COURSES));
            if (savedCourses) {
                return JSON.parse(savedCourses);
            }
        } catch (error) {
            console.error('Error reading courses from localStorage:', error);
        }
        return INITIAL_COURSES;
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
        } catch (error) {
            console.error('Error saving courses to localStorage:', error);
        }
    }, [courses]);

    const addCourse = (courseData) => {
        const newCourse = {
            ...courseData,
            id: Date.now(),
            dateCreated: new Date().toISOString().split('T')[0]
        };
        setCourses(prev => [...prev, newCourse]);
        return newCourse;
    };

    const updateCourse = (courseId, courseData) => {
        setCourses(prev =>
            prev.map(course =>
                course.id === courseId
                    ? { ...courseData, id: courseId }
                    : course
            )
        );
    };

    const deleteCourse = (courseId) => {
        setCourses(prev => prev.filter(course => course.id !== courseId));
    };

    const getCourseById = (courseId) => {
        return courses.find(course => course.id === courseId);
    };

    return {
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        getCourseById
    };
}

export default useCourseManager;
