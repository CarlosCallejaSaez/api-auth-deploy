const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const emailValidator = {
  validator: function (value) {
    return /^[^\s@]+@(rockthecode\.com|rockthecode\.es)$/.test(value);
  },
  message: 'Please enter a valid rockthecode email address ending in @rockthecode.com or @rockthecode.es.'
};

const passwordValidator = {
  validator: function (value) {
    return /^(?=.*?[a-z])(?=.*?[A-Z]).{6,}$/.test(value);
  },
  message: 'Password must be at least six characters long and contain both uppercase and lowercase letters.'
};

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, trim: true, validate: emailValidator },
    password: { type: String, required: true, trim: true, validate: passwordValidator },
    avatar: { type: String, required: false, trim: true }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);


const hashPassword = async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
};

userSchema.pre('save', hashPassword);

const User = mongoose.model('User', userSchema);

module.exports = User;
