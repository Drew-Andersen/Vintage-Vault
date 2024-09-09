const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
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


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;