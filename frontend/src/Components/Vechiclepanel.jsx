import React from "react";

const Vechiclepanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setvechiclepanelopen(false), props.setformpanelopen(true), props.setconfirmridepanel(false);
        }}
        className="p-3 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <h2 className="text-xl font-semibold mb-4">Choose a Vehicle</h2>
      <div
        onClick={() => {
          props.setconfirmridepanel(true);
        }}
        tabIndex={0}
        className="flex items-center justify-between p-3 mb-3 rounded-xl border border-gray-300 cursor-pointer
          focus-within:border-black"
      >
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-contain"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />

          <div className="leading-tight">
            <h4 className="font-medium text-sm flex items-center gap-1">
              UberGo <i className="ri-user-3-line text-xs">4</i>
            </h4>
            <p className="text-xs text-gray-600">2 mins away</p>
            <p className="text-xs text-gray-500">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmridepanel(true);
        }}
        tabIndex={0}
        className="flex items-center justify-between p-3 mb-3 rounded-xl border border-gray-300 cursor-pointer
          focus-within:border-black"
      >
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-contain"
 src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"            alt=""
          />

          <div className="leading-tight">
            <h4 className="font-medium text-sm flex items-center gap-1">
              UberGo <i className="ri-user-3-line text-xs">4</i>
            </h4>
            <p className="text-xs text-gray-600">2 mins away</p>
            <p className="text-xs text-gray-500">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmridepanel(true);
        }}
        tabIndex={0}
        className="flex items-center justify-between p-3 mb-3 rounded-xl border border-gray-300 cursor-pointer
          focus-within:border-black"
      >
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-contain"
 src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"            alt=""
          />

          <div className="leading-tight">
            <h4 className="font-medium text-sm flex items-center gap-1">
              UberGo <i className="ri-user-3-line text-xs">4</i>
            </h4>
            <p className="text-xs text-gray-600">2 mins away</p>
            <p className="text-xs text-gray-500">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmridepanel(true);
        }}
        tabIndex={0}
        className="flex items-center justify-between p-3 mb-3 rounded-xl border border-gray-300 cursor-pointer
          focus-within:border-black"
      >
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-contain"
 src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"            alt=""
          />

          <div className="leading-tight">
            <h4 className="font-medium text-sm flex items-center gap-1">
              UberGo <i className="ri-user-3-line text-xs">4</i>
            </h4>
            <p className="text-xs text-gray-600">2 mins away</p>
            <p className="text-xs text-gray-500">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
    </div>
  );
};

export default Vechiclepanel;
