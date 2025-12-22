// const express = require("express");
// const router = express.Router();
// const { body } = require("express-validator");
// const captainController = require("../controllers/capatain.controller");

// router.post(
//   "/register",
//   [
//     body("name").notEmpty().withMessage("Name is required"),
//     body("email").isEmail().withMessage("Valid email is required"),
//     body("password")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters long"),
//     body("vehicle.color").notEmpty().withMessage("vehicle color is required"),
//     body("vehicle.plate").notEmpty().withMessage("vehicle plate is required"),
//     body("vehicle.capacity")
//       .isInt({ min: 1 })
//       .withMessage("Capacity must be at least 1"),
//     body("vehicle.type")
//       .isIn(["car", "motorcycle", "auto"])
//       .withMessage("vehicle type must be car, motorcycle, or auto"),
//   ],
//   captainController.registerCaptain
// );

// module.exports = router;



// 2)


const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/capatain.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Firstname required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password min 6 chars"),
    body("vehicle.color").notEmpty(),
    body("vehicle.plate").notEmpty(),
    body("vehicle.capacity").isInt({ min: 1 }),
    body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password min 6 chars"),
  ],
  captainController.loginCaptain
);

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);

router.post("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
