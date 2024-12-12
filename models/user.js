const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true // trims whitespace if the user types a space at the beginning or end.
  },
  hashedPassword: {
    type: String,
    required: true,
    trim: true
  },
});

// remove the pw when responding to frontend
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;