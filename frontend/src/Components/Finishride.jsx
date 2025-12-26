import React from 'react';
import { Link } from 'react-router-dom';

const Finishride = (props) => {
  return (
     <div className="h-screen">
      <h5
       
        onClick={() => {
          props.setfinishride(false)
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
          Finish This Ride 
        </h3>
        <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
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
           
              <Link
                to="/captain-home"
                className=" mt-10 w-full flex justify-center mt-3 text-lg mb-1 bg-green-600 text-white font-semibold p-3 rounded-lg"
              >
                Finish Ride
              </Link>
            <p className='text-xs mt-[15%] w-80 ml-5 text-center '>Click on Finish ride  button if you have completed the payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finishride;