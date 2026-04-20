const courseService = require('./courses.service');

exports.getCourses = async (req, res) => {
    try {
        const courses = await courseService.getCourses(req.user);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCourseBySlug = async (req, res) => {
    try {
        const course = await courseService.getCourseBySlug(req.params.slug, req.user);
        if (!course) {
            return res.status(403).json({ message: 'Access denied: You are not enrolled in this course' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.enrollStudent = async (req, res) => {
    try {
        const { userId, courseId } = req.body;
        const enrollment = await courseService.enrollStudent(userId, courseId);
        res.status(201).json(enrollment);
    } catch (error) {
        // Handle unique constraint check (already enrolled)
        if (error.code === 'P2002') {
            return res.status(400).json({ message: 'Student is already enrolled in this course' });
        }
        res.status(500).json({ message: error.message });
    }
};
