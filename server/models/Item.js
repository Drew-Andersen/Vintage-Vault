const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    imageURL: {
        type: String
    }
})

module.exports = Item;