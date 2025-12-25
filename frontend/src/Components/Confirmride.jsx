import React from "react";

const Confirmride = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setvechiclepanelopen(false),
            props.setformpanelopen(true),
            props.setconfirmridepanel(false);
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
        <h3 className="text-2xl font-semibold mb-3">Confirm your ride</h3>
        <div className="flex gap-2 flex-col justify-between items-center">
          <img
            className="h-20 "
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
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
            <div  className="flex items-center gap-5 p-3 border-b-2">
              {" "}
             <i class="ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11/A</h3>
                <p className="text-sm text-gray-600 -mt-1">
                  Kamkariyatalab,Bhopal
                </p>
              </div>
            </div>
            <div  className="flex items-center gap-5 p-3 ">
              {" "}
             <i class="ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">193.23</h3>
                <p className="text-sm text-gray-600 -mt-1">
                  Cash Cash
                </p>
              </div>
            </div>
          </div>
          <button onClick={()=>{
            props.setvechiclefound(true),
            props.setconfirmridepanel(false),
             props.setvechiclepanelopen(false)
          }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmride;
