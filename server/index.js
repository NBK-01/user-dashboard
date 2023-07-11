const express = require('express');
const app = express();
const port = 3001;

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/users/api', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
