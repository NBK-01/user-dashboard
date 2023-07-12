const express = require('express');
const router = express.Router();//for modularization
const bcrypt = require('bcrypt');
const db = require('../databaseconnection');

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
  const query = 'SELECT * FROM userdb.userdbtbl'; 

  db.query(query,[],(err,result)=> {

    if(err){
      console.error('error getting users:', err); 
      return res.status(500).json({error: 'Failed to get users'});
      }

      const user = result;
      res.json(user);

  })
})

// POST create user
router.post('/post', async (req, res) => {
    const { id, firstName, lastName, email, role, hashPass } = req.body; 
    const query = 'INSERT INTO userdb.userdbtbl SET ?'; 
  //req.body is the middleware that we are using to extract the data from the body of the request
  //middleware is a function that has access to the request and response object
  
  
    
    if (!id || !firstName || !lastName || !email || !role || !hashPass) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    try{
      hashedPassword =  await bcrypt.hash(req.body.hashPass, 10) ;
    
    const newUser = {
      id, 
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
router.put('/put/:id', (req, res) => {
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

// DELETE user by ID
router.delete('/delete/:id', (req, res) => {
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

module.exports = router;
