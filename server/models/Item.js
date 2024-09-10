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
        type: Schema.Types.Decimal128,
        required: true, 
    },
    category: {
        type: String
    },
    stock: { 
        type: Number, 
        required: true 
    },
    imageURL: {
        type: String
    }
})


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;