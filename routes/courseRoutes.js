const express = require('express');
const router = express.Router();
const controller = require('../controllers/courseController');

router.post('/addCourses', controller.addCourse)
router.get('/addStudentCourses', controller.addStudentsToCourses)
module.exports = router