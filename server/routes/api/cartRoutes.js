const router = require('express').Router();
const {
  getCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} = require('../controllers/cartController');


router.route('/').get(getCart);
router.route('/add').post(addItemToCart);
router.route('/remove').delete(removeItemFromCart);
router.route('/update').put(updateItemQuantity);

module.exports = router;