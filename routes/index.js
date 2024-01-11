var express = require('express');
var router = express.Router();

var html = `
  <h1>Welcome to Assigning Mentor and Students with Database 😍😍</h1>
  <ul>
    <li>Create a Mentor: POST - "/mentor"</li>
    <li>Create a Student: POST - "/student"</li>
    <li>Assign a student to a mentor: PUT - "/mentor/:mentorId/student/:studentId"</li>
    <li>Assign/change a mentor for a student: PUT - "/student/:studentId/mentor/:mentorId"</li>
    <li>Show all students for a mentor: GET - "/mentor/:mentorId/student"</li>
    <li>Show the previously assigned mentor for a student: GET - "/student/:studentId/mentor"</li>
  </ul>
`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(html);
});

module.exports = router;
