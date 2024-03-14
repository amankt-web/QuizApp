const User = require('../models/User');

exports.createUser = async (userData) => {
    try {
        // Create a new user instance
        const newUser = new User(userData);
        // Save the user to the database
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw new Error('Failed to create user: ' + error.message);
    }
};

exports.getUserById = async (userId) => {
    try {
        // Find user by ID
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error('Failed to get user: ' + error.message);
    }
};

exports.updateUser = async (userId, userData) => {
    try {
        // Update user data
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error('Failed to update user: ' + error.message);
    }
};

exports.deleteUser = async (userId) => {
    try {
        // Delete user by ID
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw new Error('Failed to delete user: ' + error.message);
    }
};
