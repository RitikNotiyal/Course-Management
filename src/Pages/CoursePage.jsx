import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useCourseContext } from '../contexts/CourseContext';
import Button from '../components/Button';
import FormModal from '../components/FormModal'
import Form from '../components/courseComponents/Form';
import FilterSort from '../components/courseComponents/FilterSort';
import CourseList from '../components/courseComponents/CourseList';


const CoursePage = () => {
    const {
        filteredCourses,
        addCourse,
        updateCourse,
        deleteCourse,
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
        filteredCount,
        totalCourses
    } = useCourseContext();

    // Modal states
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);
    const [deletingCourseId, setDeletingCourseId] = useState(null);

    // Handlers
    const handleAddCourse = async (courseData) => {
        try {
            await addCourse(courseData);
            setIsAddModalOpen(false);
        } catch (error) {
            console.error('Failed to add course:', error);
        }
    };

    const handleEditCourse = async (courseData) => {
        try {
            await updateCourse(editingCourse.id, courseData);
            setIsEditModalOpen(false);
            setEditingCourse(null);
        } catch (error) {
            console.error('Failed to update course:', error);
        }
    };

    const handleDeleteCourse = async () => {
        try {
            await deleteCourse(deletingCourseId);
            setIsDeleteModalOpen(false);
            setDeletingCourseId(null);
        } catch (error) {
            console.error('Failed to delete course:', error);
        }
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const openEditModal = (course) => {
        setEditingCourse(course);
        setIsEditModalOpen(true);
    };

    const openDeleteModal = (courseId) => {
        setDeletingCourseId(courseId);
        setIsDeleteModalOpen(true);
    };

    const closeModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setEditingCourse(null);
        setDeletingCourseId(null);
    };

    const deletingCourse = filteredCourses.find(course => course.id === deletingCourseId);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
                    <p className="text-gray-600 mt-1">
                        Manage your course catalog with ease • {totalCourses} total courses
                    </p>
                </div>
                <Button
                    onClick={openAddModal}
                    className="flex items-center space-x-2"
                    size="lg"
                >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    <span>Add Course</span>
                </Button>
            </div>

            {/* Filter and Sort Controls */}
            <FilterSort
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                levelFilter={levelFilter}
                setLevelFilter={setLevelFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                resultCount={filteredCount}
            />

            {/* Course List */}
            <CourseList
                courses={filteredCourses}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
                onAddCourse={openAddModal}
            />

            {/* Add Course Modal */}
            <FormModal
                isOpen={isAddModalOpen}
                onClose={closeModals}
                title="Add New Course"
                size="lg"
            >
                <Form
                    onSubmit={handleAddCourse}
                    onCancel={closeModals}
                />
            </FormModal>

            {/* Edit Course Modal */}
            <FormModal
                isOpen={isEditModalOpen}
                onClose={closeModals}
                title="Edit Course"
                size="lg"
            >
                <Form
                    course={editingCourse}
                    onSubmit={handleEditCourse}
                    onCancel={closeModals}
                />
            </FormModal>

            {/* Delete Confirmation Modal */}
            <FormModal
                isOpen={isDeleteModalOpen}
                onClose={closeModals}
                title="Delete Course"
                size="md"
            >
                <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                        <p className="text-red-800">
                            Are you sure you want to delete <strong>"{deletingCourse?.title}"</strong>?
                        </p>
                        <p className="text-red-600 text-sm mt-2">
                            This action cannot be undone.
                        </p>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <Button variant="secondary" onClick={closeModals}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDeleteCourse}>
                            Delete Course
                        </Button>
                    </div>
                </div>
            </FormModal>
        </div>
    );
};

export default CoursePage;