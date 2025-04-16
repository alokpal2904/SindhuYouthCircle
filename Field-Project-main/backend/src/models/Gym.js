const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    feet: {
      type: Number,
      required: true
    },
    inches: {
      type: Number,
      required: true
    }
  },
  weight: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  medicalConditions: {
    sugar: { type: Boolean, default: false },
    bp: { type: Boolean, default: false },
    cardiac: { type: Boolean, default: false },
    thyroid: { type: Boolean, default: false },
    others: { type: Boolean, default: false },
    otherMedicalCondition: String
  },
  membershipPlan: {
    type: String,
    required: true,
    enum: ['monthly', 'quarterly', 'halfYearly', 'yearly']
  },
  amountPaid: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    default: 'pending',
    enum: ['pending', 'completed', 'failed']
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gym', gymSchema); 