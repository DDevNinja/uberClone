// const captainModel = require('../models/captain.model');

// const capatainService = require('../services/capatin.service.js');

// const { validationResult} = require('express-validator');

// /* ================= REGISTER CAPTAIN ================= */

// module.exports.registerCaptain = async (req, res,next) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//     }
// // Extracting data from request body
//     const {fullname,email,password,vehicle}=req.body;

// // Check if captain with the same email already exists
//     const iscaptainExist= await captainModel.findOne({email});
// // If captain exists, return error
//     if(iscaptainExist){
//         return res.status(400).json({message:"Email already exists"});
//     }
// // Hash the password
//     const hashedPassword = await captainModel.hashPassword(password);
// // Create new captain
//     const capatain= await capatainService.createCaptain({
//         firstname:fullname.firstname,
//         lastname:fullname.lastname,
//         email,
//         password:hashedPassword,
//         color:vehicle.color,
//         plate:vehicle.plate,
//         capacity:vehicle.capacity,
//         vehicleType:vehicle.vehicleType,
//     });

// // Save captain to database
//     await capatain.save();
// // Generate auth token
//     const token = capatain.generateAuthToken();
// // Send response
//     res.status(201).json({
//         message:"Captain registered successfully",
//         token,
//         capatain,
//     });
// }




const Captain = require("../models/captain.model");
const captainService = require("../services/capatin.service.js");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const existingCaptain = await Captain.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await Captain.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({
      message: "Captain registered successfully",
      token,
      captain,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// 2)captain login controller
module.exports.loginCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await Captain.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();

    res.status(200).json({
      message: "Login successful",
      token,
      captain,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= CAPTAIN PROFILE ================= */
module.exports.getCaptainProfile = async (req, res) => {
  try {
    res.status(200).json({
      captain: req.captain,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= LOGOUT ================= */
module.exports.logoutCaptain = async (req, res) => {
  try {
    await Captain.findByIdAndUpdate(req.captain._id, { socketId: null });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};