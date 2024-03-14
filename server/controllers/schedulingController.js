const schedulingService = require('../services/schedulingService');

exports.scheduleQuiz = async (req, res) => {
    // Schedule quiz logic
};
const schedulingService = require('../services/schedulingService');

exports.scheduleQuiz = async (quizId, scheduleDetails) => {
    try {
        // Call the scheduling service to set the schedule for the quiz
        const scheduledQuiz = await schedulingService.scheduleQuiz(quizId, scheduleDetails);
        return scheduledQuiz;
    } catch (error) {
        throw new Error('Failed to schedule quiz: ' + error.message);
    }
};
