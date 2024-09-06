const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  removeUser
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);
router.route('/:userId').delete(removeUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;
