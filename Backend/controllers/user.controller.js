
// const userModel = require("../models/user.model");
// const userService = require("../services/user.services");
// const { validationResult } = require("express-validator");

// module.exports.registerUser = async (req, res) => {
//   console.log("📩 Controller received body:", req.body);

//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     console.log("❌ Validation errors:", errors.array());
//     return res.status(400).json({ errors: errors.array() });
//   }

//   // ✅ extract data properly
//   const { fullname, email, password } = req.body;

//   console.log("🔍 Extracted data:", fullname, email);

//   // ✅ hash password
//   const hashedPassword = await userModel.prototype.hashPassword(password);
//   console.log("🔐 Password hashed");

//   // ✅ create user
//   const user = await userService.createUser({
//     fullname,
//     email,
//     password: hashedPassword,
//   });

//   console.log("✅ User created in DB:", user._id);

//   // ✅ generate token
//   const token = user.generateAuthToken();
//   console.log("🎫 JWT generated");

//   res.status(201).json({ token, user });
// };

// module.exports.loginUser = async (req, res) => {
//   console.log("📩 Controller received login body:", req.body)
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log("❌ Validation errors:", errors.array());
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { email, password } = req.body;
//   console.log("🔍 Extracted login data:", email);
//   try {
//     const user = await userService.findUserByEmail(email);
//     if (!user) {
//       console.log("❌ User not found");
//       return res.status(404).json({ message: "User not found" });
//     } 
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       console.log("❌ Incorrect password");
//       return res.status(401).json({ message: "Incorrect password" });
//     }
//     const token = user.generateAuthToken();
//     console.log("🎫 JWT generated for login");
//     res.status(200).json({ token, user });
//   } catch (error) {
//     console.error("❌ Error during login:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// 2)


const User = require("../models/user.model");
const userService = require("../services/user.services.js");
const { validationResult } = require("express-validator");

/* ================= REGISTER ================= */
module.exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const hashedPassword = await User.hashPassword(password);

    const user = await userService.createUser({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= LOGIN ================= */
module.exports.loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

