const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createProfile, getProfile, updateProfile } = require('../controllers/profileController');

/**
 * @swagger
 * /api/createProfile:
 *   post:
 *     summary: Create profile
 *     description: Create a new profile for the authenticated user, Make sure just fill with "token" not use "Bearer token".
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ferry Amaludin
 *               birthday:
 *                 type: string
 *                 example: 2025-05-06 15:30:00
 *               height:
 *                 type: integer
 *                 example: 180
 *               weight:
 *                 type: integer
 *                 example: 75
 *               interests:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["reading", "traveling"]
 *     responses:
 *       201:
 *         description: Profile has been created
 *       401:
 *         description: Unauthorized
 */
router.post('/createProfile', auth, createProfile);

/**
 * @swagger
 * /api/getProfile:
 *   get:
 *     summary: Get profile
 *     description: Retrieve the profile of the authenticated user. Make sure just fill with "token" not use "Bearer token"
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile has been found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Ferry Amaludin
 *                 birthday:
 *                   type: string
 *                   example: 2025-05-06 15:30:00
 *                 height:
 *                   type: integer
 *                   example: 180
 *                 weight:
 *                   type: integer
 *                   example: 75
 *                 interests:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["reading", "traveling"]
 *       401:
 *         description: Unauthorized
 */
router.get('/getProfile', auth, getProfile);

/**
 * @swagger
 * /api/updateProfile:
 *   put:
 *     summary: Update profile
 *     description: Update the profile of the authenticated user. Make sure just fill with "token" not use "Bearer token"
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ferry Amaludin
 *               birthday:
 *                 type: string
 *                 example: 2025-05-06 15:30:00
 *               height:
 *                 type: integer
 *                 example: 180
 *               weight:
 *                 type: integer
 *                 example: 75
 *               interests:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["reading", "traveling"]
 *     responses:
 *       200:
 *         description: Profile has been updated
 *       401:
 *         description: Unauthorized
 */
router.put('/updateProfile', auth, updateProfile);

module.exports = router;