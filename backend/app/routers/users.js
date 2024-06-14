const express = require('express');
const router = express.Router();
const { getUserById, createUser } = require('../controllers/userController');

router.get('/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
