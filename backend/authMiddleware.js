const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      req.user = jwt.verify(token, 'your_secret_key');
    } catch (err) {
      console.error(err);
    }
  }
  next();
};

module.exports = authMiddleware;
