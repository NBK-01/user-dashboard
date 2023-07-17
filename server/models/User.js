const db = require('../databaseconnection')
const bcrypt = require ('bcrypt');
const User = {


    findByEmail(email) {
      const [rows] = db.query('SELECT email FROM userdb.userdbtbl WHERE email = ?', [email]);
      return rows[0] || null;
    }, 

    comparePasswords(password, HashPass) {

        return new Promise((resolve, reject) => {

          bcrypt.compare(password, HashPass, (err, isMatch) => {

            if (err) {

              reject(err);

            } else {
              
              resolve(isMatch);
            }
          });
        });
      }
}

module.exports = User; 
