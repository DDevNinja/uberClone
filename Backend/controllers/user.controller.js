
const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res) => {
  console.log("📩 Controller received body:", req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("❌ Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  // ✅ extract data properly
  const { fullname, email, password } = req.body;

  console.log("🔍 Extracted data:", fullname, email);

  // ✅ hash password
  const hashedPassword = await userModel.prototype.hashPassword(password);
  console.log("🔐 Password hashed");

  // ✅ create user
  const user = await userService.createUser({
    fullname,
    email,
    password: hashedPassword,
  });

  console.log("✅ User created in DB:", user._id);

  // ✅ generate token
  const token = user.generateAuthToken();
  console.log("🎫 JWT generated");

  res.status(201).json({ token, user });
};

