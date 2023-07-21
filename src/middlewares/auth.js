const User = require('../models/user_model.js');
const { verifyToken } = require('../config/jwt.js');

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ data: 'You must provide a valid token' });
  }

  try {
    const parsedToken = token.replace('Bearer ', '');
    const validToken = verifyToken(parsedToken);

    const userLogued = await User.findById(validToken.email).select('-password');

    if (!userLogued) {
      return res.status(404).json({ data: 'User not found' });
    }

    req.user = userLogued;
    next();
  } catch (error) {
    return res.status(401).json({ data: 'Token not authenticated' });
  }
};

module.exports = { isAuth };
