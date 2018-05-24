var express  = require('express'),
    router = express.Router(),
    authController = require('../controleer/auth');

router.post('/login', authController.userLogin);

module.exports = router;