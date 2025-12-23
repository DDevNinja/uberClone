import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';   

const Captainlogin = () => {
    const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
      const [captaindata, setcaptaindata] = useState({});
      const submitHandler = (e) => {
        e.preventDefault();
        setcaptaindata({
            email:email,
            password:password   
        })
        console.log(captaindata);
        setemail("");
        setpassword("");
        // Handle login logic here
      }
  return (
        <div className="p-8 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <h3 className='mb-10 text-xl text-center font-medium border rounded-full border-b-2 border-black p-3 w-1/3 bg-yellow-400'>Captain</h3>
        <form onSubmit={(e)=>submitHandler(e)} action="">
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
                // console.log(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
                // console.log(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>

          <p className="text-center text-lg mb-3">
            Join a fleet ?{" "}
            <Link className="text-blue-600 text-lg" to="/captain-signup">
              Register as a Captain 
            </Link>
          </p>
        </form>
      </div>
      <Link
        className="bg-[#d5622d] text-white mb-14 flex items-center justify-center rounded-lg px-4 py-3 border w-full text-lg placeholder:text-base"
        to="/login"
      >
        Sign in as User
      </Link>
    </div>
  );
};

export default Captainlogin;