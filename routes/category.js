var express = require('express');
var router = express.Router();
var categoryController = require('../controleer/category');


router.post('/', categoryController.createCategory);
router.patch('/:id', categoryController.updatecategory);
router.get('/:id', categoryController.getCategory);
router.get('/', categoryController.getAllCategory);

module.exports = router;