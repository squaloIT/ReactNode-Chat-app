const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
      // minlength: 5,
      // maxlength: 100
    },
    password: {
      type: String,
      trim: true,
      required: true
      // minlength: 3,
      // maxlength: 30
    },
    username: {
      type: String,
      trim: true,
      required: true
      // minlength: 3,
      // maxlength: 30
    }
  },
  { timestamps: true }
);

userSchema.pre("save", function preSave(next) {
  if (!this.isModified("password")) {
    next();
  }

  bcrypt.hash(this.password, 10, function(err, hash) {
    // Store hash in your password DB.
    if (err) {
      return;
    }
    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(password) {
  const passwordHashed = this.password;

  return new Promise((res, rej) => {
    bcrypt.compare(password, passwordHashed, (err, isSame) => {
      if (err) {
        return rej(err);
      }

      res(isSame);
    });
  });
};
const User = mongoose.model("user", userSchema);
module.exports = User;
