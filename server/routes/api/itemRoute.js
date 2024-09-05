const router = require('express').Router();
const {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    removeItem
} = require('../controllers/itemController');

router.route('/').get(getAllItems);
router.route('/:id').get(getItem);
router.route('/').post(createItem);
router.route('/').put(updateItem);
router.route('/').delete(removeItem);

module.exports = router;