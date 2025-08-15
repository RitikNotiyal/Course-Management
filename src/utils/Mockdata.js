// Course categories
export const CATEGORIES = [
    'Frontend',
    'Backend',
    'Design',
    'Data Science',
    'Mobile',
    'DevOps'
];

// Course levels
export const LEVELS = [
    'Beginner',
    'Intermediate',
    'Advanced'
];

// Course status
export const STATUS = [
    'Draft',
    'Active',
    'Archived'
];

// Sort options
export const SORT_OPTIONS = [
    { value: 'dateCreated_desc', label: 'Newest' },
    { value: 'dateCreated_asc', label: 'Oldest' },
    { value: 'title_asc', label: 'Title (A-Z)' },
    { value: 'title_desc', label: 'Title (Z-A)' },
    { value: 'level', label: 'Sort by Level' },
];

// Mock data
export const INITIAL_COURSES = [
    {
        id: 1,
        title: "React Fundamentals",
        category: "Frontend",
        level: "Beginner",
        status: "Active",
        tags: ["JavaScript", "React", "Components"],
        dateCreated: "2024-01-15",
        description: "Learn the basics of React development"
    },
    {
        id: 2,
        title: "Advanced Node.js",
        category: "Backend",
        level: "Advanced",
        status: "Draft",
        tags: ["Node.js", "Express", "MongoDB"],
        dateCreated: "2024-02-10",
        description: "Master backend development with Node.js"
    },
    {
        id: 3,
        title: "UI/UX Design Principles",
        category: "Design",
        level: "Intermediate",
        status: "Active",
        tags: ["Design", "UX", "Figma"],
        dateCreated: "2024-01-20",
        description: "Create beautiful and functional user interfaces"
    }
];

// Level colors 
export const LEVEL_COLORS = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
};

// Status colors 
export const STATUS_COLORS = {
    'Active': 'bg-blue-100 text-blue-800',
    'Draft': 'bg-gray-100 text-gray-800',
    'Archived': 'bg-purple-100 text-purple-800'
};