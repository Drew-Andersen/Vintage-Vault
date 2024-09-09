const jwt = require('jsonwebtoken');
const secret = '';
const expiration = '30d';
 

generateToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    process.env.JWT_SECRET, {
    //   expiresIn:  // Adjust token expiry as needed
    },
  };
  
  module.exports = generateToken;