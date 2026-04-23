const courseService = require('./courses.service');

exports.getCourses = async (req, res) => {
    const courses = await courseService.getCourses();
    res.json(courses);
};

exports.getCourseBySlug = async (req, res) => {
    const { slug } = req.params;
    const course = await courseService.getCourseBySlug(slug);
    res.json(course);
};