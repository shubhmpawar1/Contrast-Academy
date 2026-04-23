const express = require('express');
const router = express.Router();
const courseController = require('./courses.controller');

// PUBLIC APIs
router.get('/', courseController.getCourses);
router.get('/:slug', courseController.getCourseBySlug);

module.exports = router;