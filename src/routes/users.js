const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  deregisterUser,
  uploadAvatar
} = require('../controllers/user_controller.js');
const { isAuth } = require('../middlewares/auth.js');
const { uploadImageToCloudinary } = require('../middlewares/uploadfile.js');

router.get('/', [isAuth], getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', [isAuth], uploadImageToCloudinary.single('avatar'), uploadAvatar);
router.delete('/:id', [isAuth], deregisterUser);

module.exports = router;