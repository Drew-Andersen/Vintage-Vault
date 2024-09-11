const router = require('express').Router();
const {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    removeItem
} = require('../../controllers/itemController');

router.route('/').get(getAllItems);
router.route('/:id').get(getItem);
router.route('/').post(createItem);
router.route('/:id').put(updateItem);
router.route('/:id').delete(removeItem);
router.route('/items').post(postItem);

module.exports = router;