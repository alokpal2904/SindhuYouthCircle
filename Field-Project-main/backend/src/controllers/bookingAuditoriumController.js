const BookingAuditorium = require('../models/BookingAuditorium');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const booking = new BookingAuditorium(req.body);
        await booking.save();
        
        res.status(201).json({
            success: true,
            data: booking
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await BookingAuditorium.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            data: bookings
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get a single booking by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await BookingAuditorium.findById(req.params.id);
        
        if (!booking) {
            return res.status(404).json({
                success: false,
                error: 'Booking not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}; 