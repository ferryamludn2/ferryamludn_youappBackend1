const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: ferrykeren@gmail.com
 *               username:
 *                 type: string
 *                 example: ferrykeren
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User has been created successfully
 *       400:
 *         description: Bad request
 */
router.post('/register', register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticate a user and return a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: ferrykeren@gmail.com
 *               username:
 *                 type: string
 *                 example: ferrykeren
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User has been logged in
 *       401:
 *         description: Unauthorized
 */
router.post('/login', login);

module.exports = router;