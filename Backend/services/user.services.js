
const User = require("../models/user.model");

module.exports.createUser = async ({ fullname, email, password }) => {
  console.log("🛠 Service received:", fullname, email);

  if (!fullname || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = await User.create({
    fullname,
    email,
    password,
  });

  console.log("💾 User saved to DB");
  return user;
};
