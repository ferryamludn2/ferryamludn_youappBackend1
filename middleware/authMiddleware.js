const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  console.log("isi req :", req.headers.authorization)
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access token required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
