const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    createBooking,
    getUserBookings,
    getAllBookings,
    updateBookingStatus
} = require('../controllers/bookingController');

// Create a new booking (public)
router.post('/', createBooking);

// Get user's bookings (protected)
router.get('/my-bookings', protect, getUserBookings);

// Get all bookings (admin only)
router.get('/all', protect, getAllBookings);

// Update booking status (admin only)
router.patch('/:id/status', protect, updateBookingStatus);

module.exports = router; 