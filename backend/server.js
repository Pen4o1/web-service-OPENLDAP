const express = require('express');
const bodyParser = require('body-parser');
const { getUserById, createUser } = require('./app/controllers/userController');  

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get('/users/:userId', getUserById);
app.post('/users', createUser);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
