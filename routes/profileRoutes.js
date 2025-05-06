const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createProfile, getProfile, updateProfile } = require('../controllers/profileController');

router.post('/createProfile', auth, createProfile);
router.get('/getProfile', auth, getProfile);
router.put('/updateProfile', auth, updateProfile);

module.exports = router;
