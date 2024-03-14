const { Quiz } = require('../models');

exports.createQuiz = async (quizData) => {
    try {
        // Create a new quiz document using the Quiz model
        const newQuiz = await Quiz.create(quizData);
        return newQuiz; // Return the newly created quiz document
    } catch (error) {
        throw new Error('Failed to create quiz: ' + error.message);
    }
};
