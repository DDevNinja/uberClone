
// const express = require("express");
// const { body } = require("express-validator");
// const userController = require("../controllers/user.controller.js");

// const router = express.Router();

// console.log("✅ user.routes.js loaded");

// router.post(
//   "/register",
//   [
//     body("email").isEmail().withMessage("Invalid email address"),
//     body("fullname.firstname")
//       .isLength({ min: 3 })
//       .withMessage("First name must be at least 3 characters long"),
//     body("password")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters long"),
//   ],
//   (req, res, next) => {
//     console.log("📥 Incoming request body:", req.body);
//     next();
//   },
//   userController.registerUser
// );


// router.post('/login',[
//   body('email').isEmail().withMessage('Invalid email address'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
// ], (req, res, next) => {
//   console.log("📥 Incoming login request body:", req.body);
//   next();
// }, userController.loginUser);


// module.exports = router;



// 2)


const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

const router = express.Router();
const { authUser } = require("../middleware/auth.middleware.js");

console.log("✅ user.routes.js loaded");
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Firstname must be at least 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  userController.loginUser
);

// this is the profile route 
router.get("/profile", authUser, userController.getUserProfile);

// this is the logout route

router.post("/logout", authUser, userController.logoutUser);

module.exports = router;
