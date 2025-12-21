const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      minlength: 3,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  socketId: {
    type: String,
  },
});

/* 🔐 JWT */
userSchema.methods.generateAuthToken = function () {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not defined");
  }

  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

/* 🔍 Compare Password */
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

/* 🔐 Hash Password */
userSchema.statics.hashPassword = async function (password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
