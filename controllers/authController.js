const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await db.query(
      'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id',
      [email, username, hashed]
    );
    res.status(201).json({ message: 'User has been created successfully', id: user.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1 AND username = $2', [email, username]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
