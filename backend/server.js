const express = require('express');
const app = express();
const userController = require('./app/controllers/userController');

app.get('/api/users', userController.getUsers);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    