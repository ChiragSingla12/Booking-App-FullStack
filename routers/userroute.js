const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user/add-user', userController.addUser);

router.get('/user/get-users', userController.getUsers);

router.delete('/user/delete/:id', userController.deleteUser);

module.exports = router;