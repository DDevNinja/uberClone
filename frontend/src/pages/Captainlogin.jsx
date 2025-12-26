import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/Captaincontext";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captaindata = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captaindata
      );

      if (response.status === 200) {
        const { token, captain } = response.data;

        // save token
        localStorage.setItem("token", token);

        // save captain in context
        setCaptain(captain);

        // navigate to captain home
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Captain login error:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
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

        <h3 className="mb-10 text-xl text-center font-medium border rounded-full border-black p-3 w-1/3 bg-yellow-400">
          Captain
        </h3>

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg"
            placeholder="Enter your password"
          />

          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg">
            Login
          </button>

          <p className="text-center text-lg mb-3">
            Join a fleet?{" "}
            <Link className="text-blue-600" to="/captain-signup">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <Link
        className="bg-[#d5622d] text-white mb-10 flex items-center justify-center rounded-lg px-4 py-3 w-full text-lg"
        to="/login"
      >
        Sign in as User
      </Link>
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

export default Captainlogin;
