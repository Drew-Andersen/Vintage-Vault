const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
    },
  items: [
    {
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item', 
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true, 
        default: 1 
      },
    },
  ],
  updatedAt: { 
    type: Date, 
    default: Date.now 
 },

});

CartSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Cart', CartSchema);
