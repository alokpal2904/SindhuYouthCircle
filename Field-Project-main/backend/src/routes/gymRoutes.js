const express = require('express');
const router = express.Router();
const gymController = require('../controllers/gymController');

// Create new gym membership
router.post('/members', gymController.createMembership);

// Get all gym members
router.get('/members', gymController.getAllMembers);

// Get member by ID
router.get('/members/:id', gymController.getMemberById);

module.exports = router; 