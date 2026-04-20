const express = require('express');
const router = express.Router();
const courseController = require('./courses.controller');
const { authMiddleware, checkRole } = require('../../middleware/auth.middleware');

// All authenticated users can get their courses (filtered by role in controller)
router.get('/', authMiddleware, courseController.getCourses);

// Get specific course (with access check)
router.get('/:slug', authMiddleware, courseController.getCourseBySlug);

// Only COURSE_ADMIN can create courses
router.post('/', authMiddleware, checkRole(['COURSE_ADMIN']), courseController.createCourse);

// Only COURSE_ADMIN can enroll students
router.post('/enroll', authMiddleware, checkRole(['COURSE_ADMIN']), courseController.enrollStudent);

module.exports = router;
