const User = require('../models/User');

// Create new user
exports.createUser = async (req, res) => {
    try {
        const { username, email, password, preferences } = req.body;

        // Create user
        const user = await User.create({
            username,
            email,
            password,
            preferences
        });

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get all users (for testing)
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}; 