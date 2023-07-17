const jwt = require('jsonwebtoken');



function generateJwtToken(user) {

    const payload = {
      sub: user.email, 
    }; 
  
    const options = {
      expiresIn: '1h', 
    };
  

    const token = jwt.sign(payload, 'key', options);
  
    return token;
  }

  module.exports = generateJwtToken;