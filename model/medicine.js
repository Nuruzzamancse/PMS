var mongoose = require('mongoose');

var medicineSchema = new mongoose.Schema({
    name:{ type: String},
    price: { type: String},
    quantity: { type: String}
})

module.exports = mongoose.model('Medicine', medicineSchema);