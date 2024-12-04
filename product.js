var mongoose = require('mongoose');
var Schema = mongoose.Schema;
proSchema = new Schema({
    productid : Number,
    productname : String,
    productprice : Number,
    productquality : String
});
module.exports = mongoose.model('product', proSchema);
