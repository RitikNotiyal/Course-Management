import React, { createContext, useContext, useState, useEffect } from 'react';
import  useCourseManager  from '../customHooks/useCourseManager';

const CourseContext = createContext();

export const useCourseContext = () => {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error('useCourseContext must be used within a CourseProvider');
    }
    return context;
};

export const CourseProvider = ({ children }) => {
    const { courses, addCourse, updateCourse, deleteCourse, getCourseById } = useCourseManager();

    // Filter and sort state
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [levelFilter, setLevelFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [sortBy, setSortBy] = useState('dateCreated');
    const [sortOrder, setSortOrder] = useState('desc');

    // Filtered and sorted courses
    const [filteredCourses, setFilteredCourses] = useState([]);

    // Filter and sort courses whenever dependencies change
    useEffect(() => {
        let filtered = courses.filter(course => {
            const matchesSearch = !searchTerm ||
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory = !categoryFilter || course.category === categoryFilter;
            const matchesLevel = !levelFilter || course.level === levelFilter;
            const matchesStatus = !statusFilter || course.status === statusFilter;

            return matchesSearch && matchesCategory && matchesLevel && matchesStatus;
        });

        // Sort courses
        filtered.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];

            if (sortBy === 'dateCreated') {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            } else if (sortBy === 'level') {
                const levelOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
                aValue = levelOrder[aValue];
                bValue = levelOrder[bValue];
            } else if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredCourses(filtered);
    }, [courses, searchTerm, categoryFilter, levelFilter, statusFilter, sortBy, sortOrder]);

    // Reset filters
    const clearFilters = () => {
        setSearchTerm('');
        setCategoryFilter('');
        setLevelFilter('');
        setStatusFilter('');
        setSortBy('dateCreated');
        setSortOrder('desc');
    };

    const value = {
        // Course data and operations
        courses,
        filteredCourses,
        addCourse,
        updateCourse,
        deleteCourse,
        getCourseById,

        // Filter and sort state
        searchTerm,
        setSearchTerm,
        categoryFilter,
        setCategoryFilter,
        levelFilter,
        setLevelFilter,
        statusFilter,
        setStatusFilter,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
        clearFilters,

        // Computed values
        totalCourses: courses.length,
        filteredCount: filteredCourses.length
    };

    return (
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    );
};