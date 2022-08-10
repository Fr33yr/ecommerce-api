const mongoose = require('mongoose');
const {Schema, model} = mongoose

const productsSchema = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    price: Number
})

module.exports = model("Product", productsSchema)