const express = require('express');
const route = express.Router();
const AppController = require('../controllers/AppController')
const StudentsController = require('../controllers/StudentsController')

route.get('/', AppController.getHomepage);
route.get('/students', StudentsController.getAllStudents);
route.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = route;
