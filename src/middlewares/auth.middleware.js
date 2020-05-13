const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = function(req, res, next) {
  const token = req.headers["authorization"];

  if (!token || token == 'undefined') {
    const error = new Error();
    error.message = "Token must be sent";
    error.status = 400;
    throw error;
  }

  const bearer = token.split(' ');
  const bearerBase = bearer[1]


  jwt.verify(bearerBase, JWT_SECRET, function(err, decodedToken) {
    if (err) {
      const error = new Error();
      error.message = "Invalid token";
      error.status = 401;
      throw error;
    }

    req.user = decodedToken.user;
    next();
  });
};
