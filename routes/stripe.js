let express = require('express'),
    router = express.Router(),
    stripeController = require('../controleer/stripe');
router.post('/charge', stripeController.confirmPayment);

module.exports = router;