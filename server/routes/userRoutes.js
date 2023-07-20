const express = require('express');
const router = express.Router();//for modularization
const bcrypt = require('bcrypt');
const db = require('../databaseconnection');
const passport = require('passport');
const generateJwtToken = require('../controller/authentication');

router.use(passport.initialize());

router.use(passport.session());




// GET user by ID
router.get('/get/:id', (req, res) => {
  //:id is a route parameter, this specifies that id is a variable
    // that can be accessed in the request object through req.params.id

    const userId = req.params.id;//req.params is used to access the route parameters
    const query = 'SELECT firstName, lastName, email, role FROM userdb.userdbtbl WHERE id = ?'; //? is a placeholder for the value of userId
  
    db.query(query, [userId], (err, results) => { //userID is in an array because the query method expects an array of values
      if (err) {
        console.error('Error retrieving user information:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      const user = results[0];
      res.json(user);
    });
});

router.get('/getall', (req, res) => {
<<<<<<< HEAD
  const query = 'SELECT firstName, lastName, email, role FROM userdb.userdbtbl'; 
=======
  const query = 'SELECT id, firstName, lastName, email, role FROM userdb.userdbtbl'; 
>>>>>>> 5a92f74 (client-side test)

  db.query(query,[],(err,result)=> {

    if(err){
      console.error('error getting users:', err); 
      return res.status(500).json({error: 'Failed to get users'});
      }

<<<<<<< HEAD
      const users = result;
      res.json(users);
=======
      const user = result;
      res.json(user);
>>>>>>> 5a92f74 (client-side test)

  })
})

<<<<<<< HEAD
// POST create user
router.post('/post', async (req, res) => {

    const {firstName, lastName, email, role, hashPass } = req.body; 

=======

// POST create user
router.post('/post', async (req, res) => {
    const {firstName, lastName, email, role, hashPass } = req.body; 
>>>>>>> 5a92f74 (client-side test)
    const query = 'INSERT INTO userdb.userdbtbl SET ?'; 
  //req.body is the middleware that we are using to extract the data from the body of the request
  //middleware is a function that has access to the request and response object
  
  
    
    if (!firstName || !lastName || !email || !role || !hashPass) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    try{
      hashedPassword =  await bcrypt.hash(req.body.hashPass, 10) ;
    
    const newUser = { 
      firstName,
      lastName,
      email,
      role, 
      hashPass: hashedPassword
    }; 
    
    db.query(query, newUser, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ error: 'Failed to create user' });
      }
  
     
      res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    });
  
      }catch (error) {
        console.error('Error hashing password:', error);
        return res.status(500).json({ error: 'Failed to hash password' });
      }
  
});

// PUT update user by ID
router.put('/put/:id',passport.authenticate('jwt', { session: false }),  
(req, res) => {
    const UserId = req.params.id;

    const { firstName, lastName, email, role } = req.body;

    const query = 'UPDATE userdbtbl SET firstName = ?, lastName = ?, email = ?, role = ? WHERE id = ?';

    db.query(query, [firstName, lastName, email, role, UserId], (err, results) => {

      if(err) {

          console.error('Error updating user:', err); 

          return res.status(err).json({error: 'Failed to update user'}); 

      }
      
      else res.json({ message: 'User updated successfully', userId: results.insertId }); 
      //results.insertId is the id of the user that was updated
    })
});

// PUT update admin status by ID
router.put('/adminupdate/:id',passport.authenticate('jwt', { session: false }),
  (req, res) => {

  const id = req.params.id;

  const query = `UPDATE userdb.userdbtbl

    SET isadmin = CASE

      WHEN isadmin = 1 THEN 0

      WHEN isadmin = 0 THEN 1

      ELSE isadmin

    END

    WHERE id = ?;`;

  db.query(query, [id], (err, result) => {

    if (err) {

      console.error('Error updating user:', err);

      return res.status(500).json({ error: 'Failed to update user' });
    }

    if (result.affectedRows === 0) {

      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ success: true });
  });
});

// DELETE user by ID
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),
 (req, res) => {
    const userId = req.params.id;

    const query = "DELETE FROM userdbtbl WHERE id = ?";
  
    db.query(query, [userId], (err, results) => {

      if (err) {

        console.error('Error deleting user:', err);

        return res.status(500).json({ error: 'Failed to delete user', message: err.message });
      }
  
      if (results.affectedRows === 0) {

        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    });
  });

  router.post('/login', passport.authenticate('local', { session: false })
  , (req, res) => 
  {
    const user = req.user;
     // Assuming the authenticated user object is available in req.user
    const token = generateJwtToken(user);

    res.json({ token });
  });
  
module.exports = router;
