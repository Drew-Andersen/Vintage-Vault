const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoute');
const eraRoutes = require('./eraRoutes');
const cartRoutes = require('./cartRoutes');


router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/eras', eraRoutes);
router.use('/cart', cartRoutes);


module.exports = router;
