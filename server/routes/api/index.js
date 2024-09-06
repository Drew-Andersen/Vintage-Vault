const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoute');


router.use('/userRoutes', userRoutes);
router.use('/itemRoute', itemRoutes);


module.exports = router;
