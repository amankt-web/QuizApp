const dashboardService = require('../services/dashboardService');

exports.getDashboardData = async (req, res) => {
    try {
        // Fetch quiz data from the dashboard service
        const quizzes = await dashboardService.getAllQuizzes();

        // Render the dashboard page with the retrieved quiz data
        res.render('dashboard', { quizzes });
    } catch (error) {
        // Handle errors
        console.error('Error fetching dashboard data:', error);
        res.status(500).send('Internal Server Error');
    }
};
