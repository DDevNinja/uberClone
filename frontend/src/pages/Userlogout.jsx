// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const Userlogout = () => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   axios
//     .post(
//       `${import.meta.env.VITE_BASE_URL}/users/logout`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//     .then((response) => {
//       if (response.status === 200) {
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     });
//   return <div>Userlogout</div>;
// };

// export default Userlogout;


import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // ✅ always remove token
        localStorage.removeItem("token");

        // ✅ redirect to users login page
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Userlogout;
