import React from 'react';
import { MagnifyingGlassIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Selector from '../Selector';
import Button from '../Button';
import { CATEGORIES, LEVELS, STATUS, SORT_OPTIONS } from '../../utils/Mockdata';

const FilterSort = ({
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
    resultCount = 0
}) => {
    const categoryOptions = [
        { value: '', label: 'All Categories' },
        ...CATEGORIES.map(category => ({ value: category, label: category }))
    ];

    const levelOptions = [
        { value: '', label: 'All Levels' },
        ...LEVELS.map(level => ({ value: level, label: level }))
    ];

    const statusOptions = [
        { value: '', label: 'All Status' },
        ...STATUS.map(status => ({ value: status, label: status }))
    ];

    const clearAllFilters = () => {
        setSearchTerm('');
        setCategoryFilter('');
        setLevelFilter('');
        setStatusFilter('');
        setSortBy('dateCreated');
        setSortOrder('desc');
    };

    const hasActiveFilters = searchTerm || categoryFilter || levelFilter || statusFilter;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            {/* Search Bar */}
            <div className="mb-4">
                <div className="relative max-w-md">
                    <MagnifyingGlassIcon
                        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        aria-label="Search courses"
                    />
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Filters */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Filter</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Selector
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            options={categoryOptions}
                            className="text-sm"
                            aria-label="Filter by category"
                        />
                        <Selector
                            value={levelFilter}
                            onChange={(e) => setLevelFilter(e.target.value)}
                            options={levelOptions}
                            className="text-sm"
                            aria-label="Filter by level"
                        />
                        <Selector
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            options={statusOptions}
                            className="text-sm"
                            aria-label="Filter by status"
                        />
                    </div>
                </div>

                {/* Sort Controls */}
                <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Sort</h3>
                <div className="flex space-x-2">
                    <Selector
                        value={`${sortBy}_${sortOrder}`}
                        onChange={(e) => {
                            const [by, order] = e.target.value.split('_');
                            setSortBy(by);
                            setSortOrder(order);
                        }}
                        options={SORT_OPTIONS}
                        className="text-sm flex-1"
                        aria-label="Sort by"
                    />
                    </div>
                </div>

                {/* Clear Filters */}
                <div className="flex items-center">
                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearAllFilters}
                            className="text-sm"
                        >
                            Clear Filters
                        </Button>
                    )}
                </div>
            </div>

            {/* Results Count */}
            {(hasActiveFilters || searchTerm) && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        {resultCount === 0
                            ? 'No courses found'
                            : `${resultCount} course${resultCount === 1 ? '' : 's'} found`}
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="ml-2 text-blue-600 hover:text-blue-800 underline"
                            >
                                Clear all filters
                            </button>
                        )}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FilterSort;