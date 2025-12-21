
const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user.controller.js");

const router = express.Router();

console.log("✅ user.routes.js loaded");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  (req, res, next) => {
    console.log("📥 Incoming request body:", req.body);
    next();
  },
  userController.registerUser
);

module.exports = router;
