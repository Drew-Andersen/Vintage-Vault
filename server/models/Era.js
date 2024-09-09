const mongoose = require('mongoose');
const { Schema } = mongoose;

const eraSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageURL: {
        type: String
    },
    items: [{
        type: Schema.Types.ObjectID,
        ref: "Item",
      }],
});

const Era = mongoose.model('Era', eraSchema);

module.exports = Era;