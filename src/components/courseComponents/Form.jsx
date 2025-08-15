import React, { useState } from 'react';
import Button from '../Button'
import Selector from '../Selector'
import Input from '../Input'
import { CATEGORIES, LEVELS, STATUS } from '../../utils/Mockdata';

const Form = ({ course, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        title: course?.title || '',
        category: course?.category || 'Frontend',
        level: course?.level || 'Beginner',
        status: course?.status || 'Draft',
        description: course?.description || '',
        tags: course?.tags?.join(', ') || ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Title validation
        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        } else if (formData.title.length < 3) {
            newErrors.title = 'Title must be at least 3 characters long';
        }

        // Description validation
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        } else if (formData.description.length < 10) {
            newErrors.description = 'Description must be at least 10 characters long';
        }

        // Tags validation 
        if (formData.tags.trim()) {
            const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
            if (tags.length > 10) {
                newErrors.tags = 'Maximum 10 tags allowed';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const courseData = {
                ...formData,
                title: formData.title.trim(),
                description: formData.description.trim(),
                tags: formData.tags
                    .split(',')
                    .map(tag => tag.trim())
                    .filter(tag => tag)
                    .slice(0, 10),
                dateCreated: course?.dateCreated || new Date().toISOString().split('T')[0],
                id: course?.id
            };

            await onSubmit(courseData);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const categoryOptions = CATEGORIES.map(category => ({
        value: category,
        label: category
    }));

    const levelOptions = LEVELS.map(level => ({
        value: level,
        label: level
    }));

    const statusOptions = STATUS.map(status => ({
        value: status,
        label: status
    }));

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Title */}
            <Input
                label="Course Title *"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                error={errors.title}
                placeholder="Enter course title"
                maxLength={100}
                required
            />

            {/* Category, Level, Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Selector
                    label="Category *"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    options={categoryOptions}
                    required
                />

                <Selector
                    label="Level *"
                    value={formData.level}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    options={levelOptions}
                    required
                />

                <Selector
                    label="Status *"
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    options={statusOptions}
                    required
                />
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                </label>
                <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    placeholder="Describe what students will learn in this course..."
                    maxLength={500}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${errors.description ? 'border-red-500' : ''
                        }`}
                    required
                />
                <div className="flex justify-between mt-1">
                    {errors.description && (
                        <p className="text-sm text-red-600" role="alert">
                            {errors.description}
                        </p>
                    )}
                    <p className="text-xs text-gray-500 ml-auto">
                        {formData.description.length}/500
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div>
                <Input
                    label="Tags (Optional)"
                    value={formData.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    error={errors.tags}
                    placeholder="JavaScript, React, Components (separate with commas)"
                    maxLength={200}
                />
                <p className="text-xs text-gray-500 mt-1">
                    Separate tags with commas. Maximum 10 tags allowed.
                </p>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <Button
                    variant="secondary"
                    onClick={onCancel}
                    type="button"
                    disabled={isSubmitting}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : (course ? 'Update Course' : 'Add Course')}
                </Button>
            </div>
        </form>
    );
}

export default Form