const express = require('express');
const router = express.Router();
const { createQuiz } = require('../controllers/quizController');
const { createQuizValidation } = require('../middleware/authMiddleware');

router.post('/quiz', createQuizValidation, createQuiz);

module.exports = router;
