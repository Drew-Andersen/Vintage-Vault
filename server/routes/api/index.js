const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoute');


router.use('/users', userRoutes);
router.use('/items', itemRoutes);
console.log("api routes inside");


module.exports = router;
