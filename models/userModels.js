const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'user must provide a username'],
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'user must provide a number'],
  },
  email: {
    type: String,
    required: [true, 'user must provide an email'],
    unique: true,
  },
  address: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
