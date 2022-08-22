const mongoose = require('mongoose');
const {Schema, model} = mongoose

const productsSchema = new Schema({
    name: String,
    description: {
        specs: Array,
        text: String
    },
    imageUrl: String,
    pricing: {
        price: Number,
        offsale: Number
    }
})

module.exports = model("Product", productsSchema)