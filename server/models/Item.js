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
        type: Schema.Types.String,
        required: true, 
    },
    category: {
        type: String
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageURL: {
        type: String
    },
    era: {
        type: String
    }
})


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;