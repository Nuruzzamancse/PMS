var medicineController =require('../controleer/medicine');

var express = require('express');
var router = express.Router();

router.get('/search/:searchkey',medicineController.searchMedicine);
router.get('/search/',medicineController.searchMedicine);

router.post('/', medicineController.createMedicine);
router.get('/', medicineController.getAllMedicine);
router.delete('/:id', medicineController.deleteMedicine);
router.get('/:id', medicineController.getMedicine);
router.patch('/:id', medicineController.updateMedicine);




module.exports = router;