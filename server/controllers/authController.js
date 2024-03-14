// authController.js
const authService = require('../services/authservices')
const User = require('../models/User')

exports.register = async (req, res) => {
    // Extract user data from the request body
    const { username, password } = req.body;

    try {
        // Check if the user already exists in the database
        let existingUser = await User.findOne({ username});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user instance
        const newUser = new User({
            username,
            password 
        });

        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // Handle any errors
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Check if provided username and password match admin credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // If credentials match, send success response
        res.json({ message: 'Login successful' });
    } else {
        // If credentials do not match, send error response
        res.status(401).json({ error: 'Invalid credentials' });
    }

    try {
        // Authenticate user
        const user = await authService.authenticate(username, password);
        
        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If authentication is successful, create token
        const token = authService.generateToken(user);

        // Send token in response
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.logout = async (req, res) => {
    try {
        req.session.destroy();
        res.json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
