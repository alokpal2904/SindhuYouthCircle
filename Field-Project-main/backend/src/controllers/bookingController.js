const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        console.log('Received booking data:', req.body);

        // Create booking
        const booking = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            data: booking
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                errors: messages
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to create booking',
            error: error.message
        });
    }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user._id });
        
        res.status(200).json({
            success: true,
            data: bookings
        });
    } catch (error) {
        console.error('Error fetching user bookings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch bookings',
            error: error.message
        });
    }
};

// Get all bookings (admin only)
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('userId', 'name email');
        
        res.status(200).json({
            success: true,
            data: bookings
        });
    } catch (error) {
        console.error('Error fetching all bookings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch bookings',
            error: error.message
        });
    }
};

// Update booking status (admin only)
exports.updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Booking status updated successfully',
            data: booking
        });
    } catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update booking status',
            error: error.message
        });
    }
}; 