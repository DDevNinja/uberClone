import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    "sheriyans coding school",
    "anjale",
    "bhusawal",
    "jalgaon",
  ];

  return (
    <div className="p-9">
      {/* this is just a sample data */}
      {locations.map((ele, index) => {
        return (
          <div
            key={index}
            onClick={() =>{
               props.setvechiclepanelopen(true)
              props.setPanelOpen(false)
              props.setformpanelopen(false)
            }
            }
            tabIndex={0}
            className="flex items-center border border-gray-300 cursor-pointer
            focus-within:border-black p-3 rounded-full mb-3 justify-start gap-4 pb-4"
          >
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{ele}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;



// import React from "react";

// const LocationSearchPanel = (props) => {
//   const locations = [
//     "sheriyans coding school",
//     "anjale",
//     "bhusawal",
//     "jalgaon",
//   ];

//   return (
//     <div className="p-9">
//       {locations.map((ele, index) => (
//         <div
//           key={index}
//           onClick={() => {
//             props.setvechiclepanel(true); // open vehicle panel
//             props.setpanel(false);        // close location panel
//           }}
//           tabIndex={0}
//           className="flex items-center border border-gray-300 cursor-pointer
//           focus-within:border-black p-3 rounded-full mb-3 gap-4"
//         >
//           <div className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
//             <i className="ri-map-pin-fill"></i>
//           </div>
//           <h4 className="font-medium">{ele}</h4>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LocationSearchPanel;
