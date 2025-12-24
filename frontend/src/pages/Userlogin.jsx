// import { useContext, useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { UserDataContext } from "../context/Usercontext";
// import axios from "axios";
// const UserLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userData, setUserData] = useState({});
//  const {user, setuser} = useContext(UserDataContext);
//  const navigate = useNavigate();
//   const submitHandler =async (e) => {
//     e.preventDefault();

//     const userdata = {
//       email:email,
//       password:password
//     };

//     const response = await axios.post(
//       `${import.meta.env.VITE_BASE_URL}/users/login`,
//       userdata
//     );

//     if(response.status === 200){
//       setuser(response.data);
//       localStorage.setItem('token', JSON.stringify(response.data));
//       navigate("/home");
//     }

//     setUserData(userdata);
//     console.log(userdata); // ✅ correct log

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="p-8 flex flex-col h-screen justify-between">
//       <div>
//         <img
//           className="w-20 mb-10"
//           src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
//           alt="Uber"
//         />
//         <div className="w-full flex justify-between ">
//              <h3 className='mb-10 text-xl text-center font-medium border rounded-full border-b-2 border-black p-3 w-1/3 bg-[#d5622d]'>User</h3>
//         </div>
      
//         <form onSubmit={submitHandler}>
//           <h3 className="text-lg font-medium mb-2">What's your email</h3>
//           <input
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
//             type="email"
//             placeholder="email@example.com"
//           />

//           <h3 className="text-lg font-medium mb-2">Enter password</h3>
//           <input
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
//             type="password"
//             placeholder="Enter your password"
//           />

//           <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
//             Login
//           </button>

//           <p className="text-center mb-3">
//             New here?{" "}
//             <Link className="text-blue-600" to="/signup">
//               Create new account
//             </Link>
//           </p>
//         </form>
//       </div>

//       <Link
//         className="bg-[#10b461] text-white mb-14 flex items-center justify-center rounded-lg px-4 py-2 border w-full text-lg"
//         to="/captain-login"
//       >
//         Sign in as Captain
//       </Link>
//     </div>
//   );
// };

// export default UserLogin;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/Usercontext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setuser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      );

      if (response.status === 200) {
        // ✅ SAVE ONLY JWT
        localStorage.setItem("token", response.data.token);

        // ✅ SAVE USER DATA IN CONTEXT
        setuser(response.data.user);

        navigate("/home");
      }
    } catch (error) {
      console.log("Login error:", error.response?.data);
      alert(error.response?.data?.message || "Invalid email or password");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-8 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber"
        />

        <h3 className="mb-10 text-xl text-center font-medium border rounded-full border-black p-3 w-1/3 bg-[#d5622d]">
          User
        </h3>

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg"
            type="password"
            placeholder="Enter your password"
          />

          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg">
            Login
          </button>

          <p className="text-center mb-3">
            New here?{" "}
            <Link className="text-blue-600" to="/signup">
              Create new account
            </Link>
          </p>
        </form>
      </div>

      <Link
        className="bg-[#10b461] text-white mb-14 flex items-center justify-center rounded-lg px-4 py-2 w-full text-lg"
        to="/captain-login"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;


