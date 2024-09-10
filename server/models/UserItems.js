const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const userItemSchema = new Schema (
    {
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Schema.Types.Decimal128,
            required: true, 
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            require: true,
        },
        imageURL: {
            type: String
        }


})


const UserItems = mongoose.model('UserItems', userItemSchema);

module.exports = UserItems;
