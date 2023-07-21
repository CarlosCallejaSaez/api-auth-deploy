const jwt = require('jsonwebtoken');

const signToken = (email) => {
  const expiresIn = '1h'; 
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  signToken,
  verifyToken,
};
