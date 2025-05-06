const db = require('../db');

exports.createProfile = async (req, res) => {
  const { name, birthday, height, weight, interests } = req.body;

  try {
    await db.query(
      'INSERT INTO profiles (user_id, name, birthday, height, weight, interests) VALUES ($1, $2, $3, $4, $5, $6)',
      [req.user.id, name, birthday, height, weight, interests]
    );
    res.status(201).json({ message: 'Profile has been created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM profiles WHERE user_id = $1', [req.user.id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { name, birthday, height, weight, interests } = req.body;

  try {
    await db.query(
      'UPDATE profiles SET name = $1, birthday = $2, height = $3, weight = $4, interests = $5 WHERE user_id = $6',
      [name, birthday, height, weight, interests, req.user.id]
    );
    res.status(200).json({ message: 'Profile has been updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
