var mongoose = require('mongoose');

var medicineSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    generic: { type: String},
    type: { type: String},
    company: { type: String},
    price: { type: String, required:true},
    quantity: { type: String, required: true}
})

module.exports = mongoose.model('Medicine', medicineSchema);