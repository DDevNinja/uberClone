import React, { useState } from "react";
import { Link } from "react-router-dom";

const Confirmridepopup = (props) => {
  const [otp,setotp]= useState('')
  const  submitHandler=(e)=>{
       e.preventDefault()
  }
  return (
    <div className="h-screen">
      <h5
        // onClick={() => {
        //   props.setvechiclepanelopen(false),
        //     props.setformpanelopen(true),
        //     props.setconfirmridepanel(false);
        // }}
        onClick={() => {
          props.setridepopuppanel(false);
        }}
        className="p-3 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <div>
        {/* <h4
          onClick={() => {
            props.setvechiclepanelopen(false);
          }}
          className="p-1 text-center w-[93%] absolute top-0 "
        >
          <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
        </h4> */}
        <h3 className="text-2xl font-medium mb-3">
          Confirm This Ride To Start
        </h3>
        <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
          <div className="flex items-center gap-3 ">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://wallpapers.com/images/file/beautiful-woman-with-random-people-in-background-roumbpovzh5jzxj5.jpg"
              alt=""
            />
            <h2 className="text-lg font-medium">Komal Patil</h2>
          </div>
          <h2 className="text-lg font-semibold ">2.2 KM</h2>
        </div>
        <div className="flex gap-2 flex-col justify-between items-center">
          {/* <img
            className="h-20 "
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          /> */}
          <div className="w-full mt-5 ">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11/A</h3>
                <p className="text-sm text-gray-600 -mt-1">
                  Kamkariyatalab,Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              {" "}
              <i class="ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11/A</h3>
                <p className="text-sm text-gray-600 -mt-1">
                  Kamkariyatalab,Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
              {" "}
              <i class="ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">193.23</h3>
                <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
              </div>
            </div>
          </div>

          <div className="mt-6 w-full">
            <form onSubmit={()=>{
                 submitHandler(e)
            }}>
              <input onChange={()=>setotp(e.target.value)} className="bg-[#eee] px-6 py-4 font-mono text-center text-lg rounded-lg w-full mt-3" type="text" placeholder="Enter OTP" value={otp}/>
              <Link
                to="/captain-riding"
                className="w-full flex justify-center mt-3 mb-1 bg-green-600 text-white font-semibold p-3 rounded-lg"
              >
                Accept
              </Link>

              <button
                onClick={() => {
                  props.setridepopuppanel(false),
                    props.setconfirmridepopuppanel(false);
                }}
                className="w-full mt-1 bg-red-500 text-white font-semibold p-3 rounded-lg"
              >
                Ignore
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmridepopup;
