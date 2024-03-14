const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.login = async (username, password) => {
    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('Invalid username or password');
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid username or password');
        }

        // Return the user object if authentication succeeds
        return user;
    } catch (error) {
        throw new Error('Authentication failed: ' + error.message);
    }
};

exports.register = async (userData) => {
    try {
        // Validate user data
        const errors = validationResult(userData);
        if (!errors.isEmpty()) {
            throw new Error('Validation failed: ' + errors.array()[0].msg);
        }

        // Check if the username already exists
        const existingUser = await User.findOne({ username: userData.username });
        if (existingUser) {
            throw new Error('Username already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Create a new user object
        const newUser = new User({
            username: userData.username,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Return the newly created user object
        return newUser;
    } catch (error) {
        throw new Error('Registration failed: ' + error.message);
    }
};
