import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import Finishride from '../Components/Finishride';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const CaptainRidingmap = () => {
    const [finishride,setfinishride]=useState(false)
    const finishrideref = useRef(null);
     useGSAP(() => {
    if (finishride) {
      gsap.to(finishrideref.current, {
        transform: "translateY(0)",
        height:'95%',
        opacity: 1,
      });
    } else {
      gsap.to(finishrideref.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [finishride]);
  return (
   <div className="h-screen relative ">
     
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
        <Link
          to="/captains/logout"
          className=" block  h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>{" "}
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>
      <div  onClick={()=>{
                setfinishride(true)
          }} className="h-1/5 p-6 flex items-center  justify-between relative  bg-yellow-400">
        <h5 className="p-1 text-center w-[95%] absolute top-0"
      >
        <i className="ri-arrow-up-wide-fill text-3xl text-gray-400"></i>
      </h5>
         <h4 className='text-xl form-semibold'>4 KM away</h4>
          <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
            Complete Ride
          </button>
      </div>
         <div ref={finishrideref} className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12">
              < Finishride setfinishride={setfinishride}/>
         </div>
     
    </div>
  );
};

export default CaptainRidingmap;



