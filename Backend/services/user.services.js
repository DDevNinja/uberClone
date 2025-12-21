
// const User = require("../models/user.model");

// module.exports.createUser = async ({ fullname, email, password }) => {
//   console.log("🛠 Service received:", fullname, email);

//   if (!fullname || !email || !password) {
//     throw new Error("All fields are required");
//   }

//   const user = await User.create({
//     fullname,
//     email,
//     password,
//   });

//   console.log("💾 User saved to DB");
//   return user;
// };

// module.exports.findUserByEmail = async (email) => {
//   console.log("🛠 Service finding user by email:", email);

//   // ✅ password explicitly include
//   const user = await User.findOne({ email }).select("+password");
    
//   return user;
// };

// 2) code

const User = require("../models/user.model");

module.exports.createUser = async ({ fullname, email, password }) => {
  return await User.create({ fullname, email, password });
};

module.exports.findUserByEmail = async (email) => {
  return await User.findOne({ email }).select("+password");
};
