

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    });

    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    // Handle signup logic here
  };

  return (
    <div className="py-5 px-5 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-20 mb-10 rounded-full"
          src="https://e7.pngegg.com/pngimages/706/738/png-clipart-uber-lebanon-logo-softbank-group-others-miscellaneous-text.png"
          alt="Uber"
        />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's our Captain Name Name</h3>

          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's our Captain email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
            Login
          </button>

          <p className="text-center mb-3">
            Already Have a Account ?{" "}
            <Link className="text-blue-600" to="/captain-login">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* <Link
        className="bg-[#10b461] text-white mb-14 flex items-center justify-center rounded-lg px-4 py-2 border w-full text-lg"
        to="/captain-login"
      >
        Sign in as Captain
      </Link> */}
      <p className="text-xs text-center">
       This site is protected by reCAPTCHA and the Google <Link className="text-blue-600 underline" to="/privacy-policy">Privacy Policy</Link> and <Link className="text-blue-600 underline" to="/privacy-policy"> Terms of Service</Link> apply.
      </p>
    </div>
  );
};

export default CaptainSignup;

