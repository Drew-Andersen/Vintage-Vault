const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema (
    {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      items: [{
        type: Schema.Types.ObjectID,
        ref: "Item",
      }],
      createdAt: {
        type: Date,
        default: Date.now(),
        require: true,
      },

 }
);


const User = mongoose.model('User', userSchema);
module.exports = User;