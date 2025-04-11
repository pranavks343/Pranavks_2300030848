const express = require('express');
const { createUser, getUsers, updateUser, deleteUser } = require('../Controllers/UsersController');
const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
