// import React, { useState } from "react";
// import "remixicon/fonts/remixicon.css";

// const Captainhome = () => {
//   const [showComplete, setShowComplete] = useState(false);

//   return (
//     <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">

//       {/* Map Section */}
//       <div className="flex-1 relative">
//         <img
//           className="h-full w-full object-cover"
//           src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//           alt="Map"
//         />

//         {/* Top Stats Bar */}
//         <div className="absolute top-4 left-4 right-4 flex gap-2">
//           <div className="flex-1 bg-white rounded-lg shadow-lg p-3 flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500">Earnings</p>
//               <p className="text-lg font-bold text-gray-800">₹295.20</p>
//             </div>
//             <i className="ri-money-rupee-circle-fill text-2xl text-green-500"></i>
//           </div>
//           <div className="flex-1 bg-white rounded-lg shadow-lg p-3 flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500">Distance</p>
//               <p className="text-lg font-bold text-gray-800">2.5 km</p>
//             </div>
//             <i className="ri-map-pin-distance-fill text-2xl text-blue-500"></i>
//           </div>
//         </div>

//         {/* Navigation Button */}
//         <div className="absolute bottom-4 right-4">
//           <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
//             <i className="ri-navigation-fill text-xl"></i>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Card */}
//       <div className="bg-white rounded-t-2xl shadow-2xl p-5 pb-6">

//         {/* Ride Status */}
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-sm text-gray-500">Current Ride</h3>
//             <h2 className="text-xl font-bold text-gray-800">Ride in Progress</h2>
//           </div>
//           <div className="bg-green-100 px-3 py-1 rounded-full">
//             <p className="text-xs font-semibold text-green-700">Active</p>
//           </div>
//         </div>

//         {/* Customer Info */}
//         <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
//           <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//             R
//           </div>
//           <div className="flex-1">
//             <h2 className="text-base font-bold text-gray-800">Rahul Sharma</h2>
//             <div className="flex items-center gap-2 mt-1">
//               <div className="flex items-center gap-1">
//                 <i className="ri-star-fill text-yellow-400 text-xs"></i>
//                 <span className="text-xs font-medium text-gray-600">4.8</span>
//               </div>
//               <span className="text-xs text-gray-400">•</span>
//               <span className="text-xs text-gray-500">Premium Rider</span>
//             </div>
//           </div>
//           <button className="bg-green-100 p-2.5 rounded-full">
//             <i className="ri-phone-fill text-green-600 text-lg"></i>
//           </button>
//         </div>

//         {/* Location Details */}
//         <div className="space-y-3 mb-5">
//           <div className="flex items-start gap-3">
//             <div className="mt-1.5">
//               <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-sm font-bold text-gray-800">Pickup</h3>
//               <p className="text-sm text-gray-600">562/11-A, Kankaria Talab</p>
//               <p className="text-xs text-gray-400">Bhopal, Madhya Pradesh</p>
//             </div>
//           </div>

//           <div className="flex justify-start ml-1">
//             <div className="w-px h-6 bg-gray-300"></div>
//           </div>

//           <div className="flex items-start gap-3">
//             <div className="mt-1.5">
//               <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-sm font-bold text-gray-800">Drop-off</h3>
//               <p className="text-sm text-gray-600">MP Nagar, Zone 2</p>
//               <p className="text-xs text-gray-400">Bhopal, Madhya Pradesh</p>
//             </div>
//           </div>
//         </div>

//         {/* Ride Details */}
//         <div className="bg-gray-50 rounded-lg p-3 mb-4">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-sm text-gray-600">Fare Amount</span>
//             <span className="text-base font-bold text-gray-800">₹193.20</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-gray-600">Payment Method</span>
//             <span className="text-sm font-semibold text-gray-800">Cash</span>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-3">
//           <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg">
//             SOS
//           </button>
//           <button
//             onClick={() => setShowComplete(true)}
//             className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md"
//           >
//             Complete Ride
//           </button>
//         </div>

//       </div>

//       {/* Complete Ride Modal */}
//       {showComplete && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
//           <div className="bg-white w-full rounded-t-2xl p-6 animate-slide-up">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Complete Ride</h2>
//             <p className="text-sm text-gray-600 mb-6">
//               Have you reached the destination and dropped off the passenger?
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowComplete(false)}
//                 className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-lg">
//                 Confirm & Complete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Captainhome;

// 2)

import React, { useState,useRef  } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Captaindetails from "../Components/Captaindetails";
import Ridepopup from "../Components/Ridepopup";
import Confirmride from "../Components/Confirmride.jsx"
import Confirmridepopup from "../Components/Confirmridepopup.jsx";
const Captainhome = () => {
  const [ridepopuppanel, setridepopuppanel] = useState(true);
    const [confirmridepopuppanel, setconfirmridepopuppanel] = useState(false);

  const ridepopuppanelref = useRef(null);
    const confirmridepopuppanelref = useRef(null);

  useGSAP(() => {
    if (ridepopuppanel) {
      gsap.to(ridepopuppanelref.current, {
        transform: "translateY(0)",
        opacity: 1,
      });
    } else {
      gsap.to(ridepopuppanelref.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [ridepopuppanel]);


  useGSAP(() => {
    if (confirmridepopuppanel) {
      gsap.to(confirmridepopuppanelref.current, {
        transform: "translateY(0)",
        height:'95%',
        opacity: 1,
      });
    } else {
      gsap.to(confirmridepopuppanelref.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [confirmridepopuppanel]);

  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>
      <div className="h-2/5 p-6">
        <Captaindetails />
      </div>
      <div ref={ridepopuppanelref} className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12">
        
       <Ridepopup setridepopuppanel={setridepopuppanel} setconfirmridepopuppanel={setconfirmridepopuppanel}/>
      </div>
      <div ref={confirmridepopuppanelref} className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12">
        
       <Confirmridepopup setridepopuppanel={setridepopuppanel} setconfirmridepopuppanel={setconfirmridepopuppanel}/>
      </div>
    </div>
  );
};

export default Captainhome;
