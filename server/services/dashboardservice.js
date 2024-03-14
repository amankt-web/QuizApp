const { Quiz } = require('../models');



// Method to create a new quiz
exports.createQuiz = async (quizData) => {
    try {
        // Create a new quiz instance using the provided data
        const newQuiz = new Quiz(quizData);
        
        // Save the quiz to the database
        await newQuiz.save();
        
        return newQuiz; // Return the newly created quiz
    } catch (error) {
        throw new Error('Failed to create quiz: ' + error.message);
    }
};

// Method to schedule a quiz for a specific date and time
exports.scheduleQuiz = async (quizId, scheduledDateTime) => {
    try {
        // Find the quiz by ID
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            throw new Error('Quiz not found');
        }
        
        // Update the scheduled date and time of the quiz
        quiz.scheduledDateTime = scheduledDateTime;
        
        // Save the updated quiz to the database
        await quiz.save();
        
        return quiz; // Return the updated quiz
    } catch (error) {
        throw new Error('Failed to schedule quiz: ' + error.message);
    }
};
