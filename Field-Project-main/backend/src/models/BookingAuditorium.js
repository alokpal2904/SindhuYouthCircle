const mongoose = require('mongoose');

const bookingAuditoriumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  bookingTime: {
    type: Date,
    required: true
  },
  purpose: {
    marriage: { type: Boolean, default: false },
    engagement: { type: Boolean, default: false },
    dinner: { type: Boolean, default: false },
    drama: { type: Boolean, default: false },
    others: { type: Boolean, default: false }
  },
  otherPurpose: String,
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  }
}, {
  timestamps: true,
  collection: 'booking_auditorium'
});

module.exports = mongoose.model('BookingAuditorium', bookingAuditoriumSchema); 