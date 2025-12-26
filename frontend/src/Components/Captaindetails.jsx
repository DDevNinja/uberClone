import React from 'react';

const Captaindetails = () => {
  return (
    <div>
         <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-4">
                <img className="h-10 w-10 rounded-full object-cover" src="https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg" alt="" />
               <h4 className="text-lg font-medium ">Durgesh Patil</h4>
              </div>
             <div>
              <h4 className="text-xl font-semibold ">₹250</h4>
              <p className="text-sm ">Earned</p>
             </div>
             </div>
             <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
                <div className="text-center">
                  <i className="text-3xl mb-2  font-thin ri-time-zone-line"></i>
                  <h5 className="text-lg font-medium">10.2</h5>
                  <p className=" text-sm text-gray-600">Hours Online</p>
                </div>
                <div className="text-center">
                  <i className="text-3xl mb-2  font-thin ri-speed-up-fill"></i>
                  <h5 className="text-lg font-medium">10.2</h5>
                  <p className=" text-sm text-gray-600">Hours Online</p>
                </div>
                <div className="text-center">
                  <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
                  <h5 className="text-lg font-medium">10.2</h5>
                  <p className=" text-sm text-gray-600">Hours Online</p>
                </div>
             </div>
        <div className="flex items-center justify-center">
          {/* <button className="w-full mt-9 bg-green-600 text-white font-semibold p-2 rounded-lg">
            Confirm
          </button> */}
        </div>
      </div>
  );
};

export default Captaindetails;