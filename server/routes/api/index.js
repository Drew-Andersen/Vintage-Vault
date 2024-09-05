const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const  = require('./');

router.use('/userRoutes', userRoutes);
// router.use('/', );

module.exports = router;
