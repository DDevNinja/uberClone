// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const captainSchema = new mongoose.Schema({
//   fullname: {
//     firstname: {
//       type: String,
//       required: true,
//       minlength: [3, "Firstname must be at least 3 characters long"],
//     },
//     lastname: {
//       type: String,
//       minlength: [3, "Lastname must be at least 3 characters long"],
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       match: [/\S+@\S+\.\S+/, "is invalid"],
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: [6, "Password must be at least 6 characters long"],
//     },
//     socketId: {
//       type: String,
//     },
//     status: {
//       type: String,
//       enum: ["available", "unavailable"],
//       default: "unavailable",
//     },
//     vehicle: {
//       color: { type: String },
//       required: true,
//       minlength: [3, "vehicle color must be at least 3 characters long"],
//     },
//     plate: {
//       type: String,
//       required: true,
//       minlength: [3, "vehicle plate must be at least 3 characters long"],
//     },
//     capacity: {
//       type: Number,
//       required: true,
//       min: [1, "Capacity must be at least 1"],
//     },
//     vehicleType: {
//       type: String,
//       required: true,
//       enum: ["car", "motorcycle", "auto"],
//     },
//     location: {
//       lat: {
//         type: Number,
//       },
//       lang: {
//         type: Number,
//       },
//     },
//   },
// });

// captainSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this_._id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
//   return token;
// };

// captainSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// capatainSchema.statics.hashPassword = async function (password) {
//   return bcrypt.hash(password, 10);
// };

// const captainModel = mongoose.model("Captain", captainSchema);
// module.exports = captainModel;




// 2)


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
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
    lowercase: true,
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
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "unavailable",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: 3,
    },
    plate: {
      type: String,
      required: true,
      minlength: 3,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    lat: Number,
    lng: Number,
  },
});

/* 🔐 JWT */
captainSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

/* 🔍 Compare password */
captainSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

/* 🔐 Hash password */
captainSchema.statics.hashPassword = async function (password) {
  return bcrypt.hash(password, 10);
};

const Captain = mongoose.model("Captain", captainSchema);
module.exports = Captain;
