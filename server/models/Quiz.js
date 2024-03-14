const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: [{
        questionText: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctAnswerIndex: {
            type: Number,
            required: true
        }
    }],
    scheduledDateTime: {
        type: Date,
        required: false // This field is optional as quizzes can be scheduled later
    }
});

module.exports = mongoose.model('Quiz', quizSchema);
