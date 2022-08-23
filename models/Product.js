const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {
        specs: {type: [String], required: true},
        text: {type: String, required: true}
    },
    imageUrl: {type: String, required: true},
    pricing: {
        price: {type: Number, required: true},
        offsale: {type: Number, required: true},
    }
})

module.exports = mongoose.model("product", productSchema)