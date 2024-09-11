const router = require('express').Router();
const {
    // Need a getAllItems
    getAllItems, // change to getAllUserItems
    getItem,
    updateItem,
    removeItem,
    postItem
} = require('../../controllers/itemController');

// router.route('/').get(getAllItems); Will be used to get all the items in the db
router.route('/:user_id').get(getAllItems);
router.route('/:id').get(getItem);
router.route('/:id').put(updateItem);
router.route('/:id').delete(removeItem);
router.route('/post-items').post(postItem);

module.exports = router;