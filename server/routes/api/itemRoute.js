const router = require('express').Router();
const {
    getAllItems, // get all items for
    getAllUserItems, // change to getAllUserItems
    getItem,
    updateItem,
    removeItem,
    postItem
} = require('../../controllers/itemController');

router.route('/').get(getAllItems); // Will be used to get all the items in the db
router.route('/:user_id').get(getAllUserItems); // Change to getAllUserItems
router.route('/:id').get(getItem);
router.route('/:id').put(updateItem);
router.route('/:id').delete(removeItem);
router.route('/post-items').post(postItem);
router.route('/search').get

module.exports = router;