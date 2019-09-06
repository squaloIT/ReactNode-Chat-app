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

userSchema.pre("save", async function(next) {
  console.log("PRE SAVE_A");
  if (!this.isModified("password")) {
    console.log("IS MODIFIED IF");
    next();
  }

  const hash = await bcrypt.hash(this.password, 10);
  try {
    this.password = hash;
    console.log("Sifrovanje uspelo ", this.password);
  } catch (e) {
    console.log("GRESKA PRILIKOM HASHOVANJA");
    console.error(e);
  }
  next();
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
