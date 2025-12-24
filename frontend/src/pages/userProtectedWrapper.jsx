
// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { UserDataContext } from "../context/Usercontext";
// const UserProtectedWrapper = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);

//   return <>{children}</>;
// };

// export default UserProtectedWrapper;


// 2)

// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { UserDataContext } from "../context/Usercontext";

// const UserProtectedWrapper = ({ children }) => {
//   const navigate = useNavigate();
//   const { setuser } = useContext(UserDataContext);

//   const token = localStorage.getItem("token");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 1️⃣ No token → redirect immediately
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     let isMounted = true; // 🧠 prevents state update after unmount

//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/users/profile`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (isMounted && response.status === 200) {
//           // 🔥 IMPORTANT: check response shape
//           const userData = response.data.user || response.data;

//           setuser(userData);
//           setIsLoading(false);
//         }
//       } catch (error) {
//         console.log(
//           "Profile fetch failed:",
//           error.response?.status,
//           error.response?.data
//         );

//         // 🔥 ONLY logout on 401 / 403
//         if (error.response?.status === 401 || error.response?.status === 403) {
//           localStorage.removeItem("token");
//           navigate("/login");
//         } else {
//           // Other errors → allow app to load
//           setIsLoading(false);
//         }
//       }
//     };

//     fetchUserProfile();

//     return () => {
//       isMounted = false;
//     };
//   }, [token, navigate, setuser]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen text-lg">
//         Loading...
//       </div>
//     );
//   }

//   return <>{children}</>;
// };

// export default UserProtectedWrapper;



// 3)
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/Usercontext";

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setuser } = useContext(UserDataContext);

  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setuser(response.data.user);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Invalid token, logging out user");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [token, navigate, setuser]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;


