const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    // Personal Information
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },

    // Educational Information
    collegeName: {
        type: String,
        required: [true, 'College name is required'],
        trim: true
    },
    collegeAddress: {
        type: String,
        required: [true, 'College address is required'],
        trim: true
    },
    academicYear: {
        type: String,
        required: [true, 'Academic year is required'],
        trim: true
    },
    stream: {
        type: String,
        required: [true, 'Stream is required'],
        enum: {
            values: ['Engineering', 'Commerce', 'Arts', '10th', '11th', '12th'],
            message: 'Please select a valid stream'
        }
    },
    semester: {
        type: String,
        required: function() {
            return ['Engineering', 'Commerce', 'Arts'].includes(this.stream);
        },
        trim: true
    },
    bookName: {
        type: String,
        required: [true, 'Book name is required'],
        trim: true
    },

    // Family Information
    familyMembers: {
        type: Number,
        required: [true, 'Number of family members is required'],
        min: [1, 'Number of family members must be at least 1']
    },
    monthlyEarnings: {
        type: Number,
        required: [true, 'Monthly earnings is required'],
        min: [0, 'Monthly earnings cannot be negative']
    },

    // Booking Details
    issueDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'approved', 'rejected'],
            message: 'Invalid status'
        },
        default: 'pending'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}, {
    timestamps: true,
    collection: 'bookreservations'
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking; 