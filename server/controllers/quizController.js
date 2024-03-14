const quizService = require('../services/quizService');

exports.createQuiz = async (req, res) => {
    try {
        // Extract quiz data from the request body
        const { title, description, questions, options, correctAnswers, schedulingDetails } = req.body;

        // Create the quiz data object
        const quizData = {
            title,
            description,
            questions,
            options,
            correctAnswers,
            schedulingDetails
        };

        // Call the quiz service to create the quiz
        const newQuiz = await quizService.createQuiz(quizData);

        res.status(201).json(newQuiz); // Respond with the newly created quiz
    } catch (error) {
        res.status(500).json({ message: 'Failed to create quiz', error: error.message });
    }
};
