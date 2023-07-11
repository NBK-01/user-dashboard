const express = require('express');
const cors = require('cors') ; 
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRouts');

app.use(cors())
app.use(express.json());

app.use('/users/api', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
