const Gym = require('../models/Gym');

// Create new gym membership
exports.createMembership = async (req, res) => {
  try {
    const {
      name,
      mobile,
      sex,
      age,
      heightFeet,
      heightInches,
      weight,
      address,
      medicalConditions,
      membershipPlan,
      amountPaid
    } = req.body;

    // Calculate end date based on membership plan
    const startDate = new Date();
    let endDate = new Date();
    
    switch (membershipPlan) {
      case 'monthly':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'quarterly':
        endDate.setMonth(endDate.getMonth() + 3);
        break;
      case 'halfYearly':
        endDate.setMonth(endDate.getMonth() + 6);
        break;
      case 'yearly':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
    }

    const gymMember = new Gym({
      name,
      mobile,
      sex,
      age,
      height: {
        feet: heightFeet,
        inches: heightInches
      },
      weight,
      address,
      medicalConditions,
      membershipPlan,
      amountPaid,
      paymentStatus: 'completed',
      startDate,
      endDate
    });

    await gymMember.save();
    res.status(201).json({
      success: true,
      message: 'Gym membership created successfully',
      data: gymMember
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating gym membership',
      error: error.message
    });
  }
};

// Get all gym members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Gym.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: members
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching gym members',
      error: error.message
    });
  }
};

// Get member by ID
exports.getMemberById = async (req, res) => {
  try {
    const member = await Gym.findById(req.params.id);
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Member not found'
      });
    }
    res.status(200).json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching member',
      error: error.message
    });
  }
}; 