import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/Usercontext.jsx";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const { user, setuser } = useContext(UserDataContext);
  const context = useContext(UserDataContext);
console.log(context);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        setuser(response.data);
        localStorage.setItem('token', JSON.stringify(response.data));
        navigate("/home"); // keep lowercase
      }

      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="p-8 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>

          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg">
            Create a New Account
          </button>

          <p className="text-center mb-3">
            Already Have an Account?{" "}
            <Link className="text-blue-600" to="/login">
              Login
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

export default UserSignup;
