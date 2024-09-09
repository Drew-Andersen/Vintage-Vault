const router = require('express').Router();
const {
    getAllEras,
    getEra,
    createEra,
    updateEra,
    removeEra,
} = require('../../controllers/itemController');

router.route('/').get(getAllEras);
router.route('/:id').get(getEra);
router.route('/').post(createEra);
router.route('/:id').put(updateEra);
router.route('/:id').delete(removeEra);

module.exports = router;