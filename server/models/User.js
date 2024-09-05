const { Schema, model } = require('mongoose');

const uerSchema = new Schema (
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
      items: {
        type: Map,
        of: Items,
      },
      cretaedAt: {
        type: Date,
        default: Date.now(),
        require: true,
      },

 }
);

module.exports = User;