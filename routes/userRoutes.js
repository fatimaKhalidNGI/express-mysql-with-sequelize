const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/getAll', userController.getAllUsers);
router.get('/getOne/:id', userController.getOneUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);


module.exports = router ;