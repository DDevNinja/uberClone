

import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Captainlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/captains/logout`,
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
        navigate("/captain-login");
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Captainlogout;
