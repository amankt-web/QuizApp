const express = require('express');
const router = express.Router();
const { scheduleQuiz } = require('../controllers/schedulingController');
const { scheduleQuizValidation } = require('../middleware/authMiddleware');

router.post('/schedule', scheduleQuizValidation, scheduleQuiz);

module.exports = router;
