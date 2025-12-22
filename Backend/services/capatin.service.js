// const capatainModel = require("../models/captain.model");

// module.exports.createCaptain = async ({
//   firstname,
//   lastname,
//   email,
//   password,
//   color,
//   plate,
//   capacity,
//   vehicleType,
// }) => {
//   //check all fields are present
//   if (
//     !firstname ||
//     !email ||
//     !password ||
//     !color ||
//     !plate ||
//     !capacity ||
//     !vehicleType
//   ) {
//     throw new Error("All fields are required");
//   }
//   //create new captain
//   const captain = new capatainModel({
//     fullname: { firstname, lastname },
//     email,
//     password,
//     vehicle: { color, plate, capacity, vehicleType },
//   });
//   return captain;
// };




// 2)



const Captain = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const captain = await Captain.create({
    fullname: { firstname, lastname },
    email,
    password,
    vehicle: { color, plate, capacity, vehicleType },
  });

  return captain;
};
