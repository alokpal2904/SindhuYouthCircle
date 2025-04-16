const express = require('express');
const router = express.Router();
const bookingAuditoriumController = require('../controllers/bookingAuditoriumController');

// Create a new booking
router.post('/bookings', bookingAuditoriumController.createBooking);

// Get all bookings
router.get('/bookings', bookingAuditoriumController.getAllBookings);

// Get a single booking by ID
router.get('/bookings/:id', bookingAuditoriumController.getBookingById);

module.exports = router; 