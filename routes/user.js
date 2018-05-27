var userController = require('../controleer/user');

var express = require('express')

var router = express.Router();

router.get('/', userController.getAllUser);
router.post('/',userController.createUser);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);

module.exports = router;