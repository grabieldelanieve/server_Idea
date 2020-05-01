const { sign } = require("jsonwebtoken"); // Firmar los tokens
const { JWT_SECRET } = require("../config");

module.exports.generateToken = function(user) {
  return sign({ user }, JWT_SECRET, { expiresIn: "4h" });
};
