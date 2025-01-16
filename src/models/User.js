const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6
    },
    preferences: {
        nightlife: { type: Boolean, default: false },
        wildlife: { type: Boolean, default: false },
        adventure: { type: Boolean, default: false },
        beach: { type: Boolean, default: false },
        watersports: { type: Boolean, default: false },
        budget: { type: Number, default: 0 },
        mountain: { type: Boolean, default: false },
        city: { type: Boolean, default: false },
        nature: { type: Boolean, default: false },
        culture: { type: Boolean, default: false },
        family: { type: Boolean, default: false },
        solo: { type: Boolean, default: false },
        group: { type: Boolean, default: false },
        romantic: { type: Boolean, default: false },
        adventure: { type: Boolean, default: false }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
