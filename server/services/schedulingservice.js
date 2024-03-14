const Quiz = require('../models/Quiz');

exports.scheduleQuiz = async (quizId, scheduleDetails) => {
    try {
        // Find the quiz by its ID
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            throw new Error('Quiz not found');
        }

        // Update the schedule details for the quiz
        quiz.schedule = scheduleDetails;
        await quiz.save();

        // Return the updated quiz object with the new schedule
        return quiz;
    } catch (error) {
        throw new Error('Failed to schedule quiz: ' + error.message);
    }
};
