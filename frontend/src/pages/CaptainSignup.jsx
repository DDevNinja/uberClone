
// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { CaptainDataContext } from "../context/Captaincontext";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// const CaptainSignup = () => {

//   const navigate=useNavigate();

//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Vehicle states
//   const [vechiclename, setVechiclename] = useState("");
//   const [vechicleplate, setVechicleplate] = useState("");
//   const [vechiclecapacity, setVechiclecapacity] = useState("");
//   const [vechicletype, setVechicletype] = useState("");

//   const { setCaptain } = useContext(CaptainDataContext);

//   const submitHandler =async (e) => {
//     e.preventDefault();

//     const captaindata = {
//       fullname: {
//         firstname:firstname,
//         lastname:lastname,
//       },
//       email:email,
//       password:password,
//       vehicle: {
//         vechiclename:vechiclename,
//         vechicleplate:vechicleplate,
//         vechiclecapacity:vechiclecapacity,
//         vechicletype:vechicletype,
//       },
//     };

//     const response = await axios.post('${import.meta.env.VITE_BASE_URL}/captains/register',captaindata)
//     setCaptain(captaindata);
//     console.log("Captain Signup Data:", captaindata);

//     // reset
//     setFirstname("");
//     setLastname("");
//     setEmail("");
//     setPassword("");
//     setVechiclename("");
//     setVechicleplate("");
//     setVechiclecapacity("");
//     setVechicletype("");
//   };

//   return (
//     <div className="p-5 flex flex-col min-h-screen justify-between">
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Uber</h2>

//         <form onSubmit={submitHandler}>
//           {/* Captain Name */}
//           <h3 className="text-sm font-medium mb-1">What’s our Captain’s name</h3>
//           <div className="flex gap-3 mb-3">
//             <input
//               type="text"
//               placeholder="First name"
//               value={firstname}
//               onChange={(e) => setFirstname(e.target.value)}
//               className="bg-[#eeeeee] rounded px-3 py-2 w-1/2"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               value={lastname}
//               onChange={(e) => setLastname(e.target.value)}
//               className="bg-[#eeeeee] rounded px-3 py-2 w-1/2"
//               required
//             />
//           </div>

//           {/* Email */}
//           <h3 className="text-sm font-medium mb-1">What’s our Captain’s email</h3>
//           <input
//             type="email"
//             placeholder="email@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-[#eeeeee] mb-3 rounded px-3 py-2 w-full"
//             required
//           />

//           {/* Password */}
//           <h3 className="text-sm font-medium mb-1">Enter Password</h3>
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-[#eeeeee] mb-4 rounded px-3 py-2 w-full"
//             required
//           />

//           {/* Vehicle Information */}
//           <h3 className="text-sm font-medium mb-2">Vehicle Information</h3>

//           <div className="flex gap-3 mb-3">
//             <input
//               type="text"
//               placeholder="Vehicle Name"
//               value={vechiclename}
//               onChange={(e) => setVechiclename(e.target.value)}
//               className="bg-[#eeeeee] rounded px-3 py-2 w-1/2"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Vehicle Plate"
//               value={vechicleplate}
//               onChange={(e) => setVechicleplate(e.target.value)}
//               className="bg-[#eeeeee] rounded px-3 py-2 w-1/2"
//               required
//             />
//           </div>

//           <div className="flex gap-3 mb-4">
//             <input
//               type="number"
//               placeholder="Vehicle Capacity"
//               value={vechiclecapacity}
//               onChange={(e) => setVechiclecapacity(e.target.value)}
//               className="bg-[#eeeeee] rounded px-3 py-2 w-1/2"
//               required
//             />

//             <select
//               value={vechicletype}
//               onChange={(e) => setVechicletype(e.target.value)}
//               className="bg-[#eeeeee] rounded px-3 py-2 w-1/2"
//               required
//             >
//               <option value="" disabled>
//                 Select Vehicle
//               </option>
//               <option value="car">Car</option>
//               <option value="bike">Bike</option>
//               <option value="auto">Auto</option>
//             </select>
//           </div>

//           <button className="bg-black text-white w-full py-2 rounded">
//             Create Captain Account
//           </button>

//           <p className="text-center text-sm mt-3">
//             Already have an account?{" "}
//             <Link className="text-blue-600" to="/captain-login">
//               Login here
//             </Link>
//           </p>
//         </form>
//       </div>

//      <p className="text-xs text-center">
//         This site is protected by reCAPTCHA and the Google{" "}
//         <Link className="text-blue-600 underline" to="/privacy-policy">
//           Privacy Policy
//         </Link>{" "}
//         and{" "}
//         <Link className="text-blue-600 underline" to="/privacy-policy">
//           {" "}
//           Terms of Service
//         </Link>{" "}
//         apply.
//       </p>
//     </div>
//   );
// };

// export default CaptainSignup;
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/Captaincontext";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Vehicle (MATCH BACKEND)
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const captaindata = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity: Number(capacity),
        vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captaindata
      );

      if (response.status === 201 || response.status === 200) {
        const data=response.data;
        setCaptain(data.captain || data);
        localStorage.setItem('token',data.token)
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Captain signup error:", error.response?.data);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="p-5 min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">Uber</h2>

        <form onSubmit={submitHandler}>
          <h3 className="text-sm font-medium mb-1">Captain Name</h3>
          <div className="flex gap-3 mb-3">
            <input
              required
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] px-3 py-2 w-1/2 rounded"
            />
            <input
              required
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] px-3 py-2 w-1/2 rounded"
            />
          </div>

          <input
            required
            type="email"
            placeholder="Email"
            className="bg-[#eeeeee] w-full px-3 py-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            type="password"
            placeholder="Password"
            className="bg-[#eeeeee] w-full px-3 py-2 mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-sm font-medium mb-2">Vehicle Information</h3>

          <div className="flex gap-3 mb-3">
            <input
              required
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] px-3 py-2 w-1/2 rounded"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              required
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] px-3 py-2 w-1/2 rounded"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />
          </div>

          <div className="flex gap-3 mb-4">
            <input
              required
              type="number"
              min="1"
              placeholder="Capacity"
              className="bg-[#eeeeee] px-3 py-2 w-1/2 rounded"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />

            <select
              required
              className="bg-[#eeeeee] px-3 py-2 w-1/2 rounded"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className="bg-black text-white w-full py-2 rounded">
            Create Captain Account
          </button>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <p className="text-xs text-center">
              This site is protected by reCAPTCHA and the Google{" "}
              <Link className="text-blue-600 underline" to="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="text-blue-600 underline" to="/privacy-policy">
                Terms of Service
              </Link>{" "}
              apply.
            </p>
    </div>
  );
};

export default CaptainSignup;
