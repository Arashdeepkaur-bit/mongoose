var mongoose = require('mongoose');
var Schema = mongoose.Schema;
buySchema = new Schema({
    productid : Number,
    productname : String,
    productprice : Number,
    productquality : String
});
module.exports = mongoose.model('buy', buySchema);
