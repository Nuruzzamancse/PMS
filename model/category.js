var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    category: { type: String}
})

module.exports = mongoose.model('Category',categorySchema);