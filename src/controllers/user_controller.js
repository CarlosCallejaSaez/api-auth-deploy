const bcrypt = require('bcrypt');
const User = require('../models/user_model.js');
const { signToken } = require('../config/jwt.js');
const { deleteImgCloudinary } = require('../middlewares/uploadfile.js');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      
    });

    const createdUser = await newUser.save();
    return res.status(201).json({ success: true, data: createdUser });
  } catch (error) {
    return next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (!userDB) {
      return res.status(400).json({ success: false, message: 'User does not exist' });
    }

    const isPasswordValid = await bcrypt.compare(password, userDB.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: 'Incorrect password' });
    }

    const token = signToken(userDB._id);
    return res.status(200).json({ success: true, token, user: userDB });
  } catch (error) {
    return next(error);
  }
};

const deregisterUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: 'User deregistered' });
  } catch (error) {
    return next(error);
  }
};

const uploadAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const originalUser = await User.findById(id);
      if (originalUser.avatar) {
        deleteImgCloudinary(originalUser.avatar);
      }

      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: { avatar: req.file.path } },
        { new: true }
      );
      return res.status(200).json({ success: true, data: updatedUser });
    } else {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
  uploadAvatar,
  deregisterUser
};
