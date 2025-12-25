// 2)

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel.jsx";
import Vechiclepanel from "../Components/Vechiclepanel.jsx";
import Confirmride from "../Components/Confirmride.jsx";
import WaitForDriver from "../Components/WaitForDriver.jsx";
import Lookingfordriver from "../Components/Lookingfordriver.jsx";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vechiclepanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const formpanelref = useRef(null);
  const confirmrideref = useRef(null);
  const vechiclefoundref = useRef(null);
  const waitingfordriverref = useRef(null);
  const [vechiclepanelopen, setvechiclepanelopen] = useState(false);
  const [formpanelopen, setformpanelopen] = useState(true);
  const [confirmridepanel, setconfirmridepanel] = useState(false);
  const [vechiclefound, setvechiclefound] = useState(false);
  const [waitingfordriver, setwaitingfordriver] = useState(false);
  // const [imageclick,setimageclick]=useState(true)
  const submitHandler = (e) => {
    e.preventDefault();
  };

  // ✅ ORIGINAL ANIMATION (UNCHANGED)
  useGSAP(() => {
    if (confirmridepanel) {
      gsap.to(confirmrideref.current, {
        transform: "translateY(0)",
        opacity: 1,
      });
    } else {
      gsap.to(confirmrideref.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [confirmridepanel]);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 24,
        // duration: 0.4,
        // ease: "power2.out",
      });

      gsap.to(panelCloseRef.current, {
        opacity: 1,
        // duration: 0.2,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0,
        // duration: 0.4,
        // ease: "power2.in",
      });

      gsap.to(panelCloseRef.current, {
        opacity: 0,
        // duration: 0.2,
      });
    }
  }, [panelOpen]);

  // ✅ FIXED ONLY SYNTAX ERROR HERE
  useGSAP(() => {
    if (vechiclepanelopen) {
      gsap.to(vechiclepanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vechiclepanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vechiclepanelopen]);

  useGSAP(() => {
    if (formpanelopen) {
      gsap.to(formpanelref.current, {
        opacity: 1,
        transform: "translateY(0)",
        // duration: 0.2,
      });
    } else {
      gsap.to(formpanelref.current, {
        opacity: 0,
        transform: "translateY(100%)",
      });
    }
  }, [formpanelopen]);

  useGSAP(() => {
    if (vechiclefound) {
      gsap.to(vechiclefoundref.current, {
        transform: "translateY(0)",
        opacity: 1,
      });
    } else {
      gsap.to(vechiclefoundref.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [vechiclefound]);

  useGSAP(() => {
    if (waitingfordriver) {
      gsap.to(waitingfordriverref.current, {
        transform: "translateY(0)",
        opacity: 1,
      });
    } else {
      gsap.to(waitingfordriverref.current, {
        transform: "translateY(100%)",
        opacity: 0,
      });
    }
  }, [waitingfordriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img
        className="w-16 absolute left-5 top-5 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber"
      />

      {/* Background Map */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-end h-screen absolute bottom-0 w-full">
        {/* Input Panel */}
        <div
          ref={formpanelref}
          translate-y-full
          className="h-[30%] opacity-1 p-6 bg-white relative z-20 rounded-xl"
        >
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 right-6 text-2xl opacity-0 cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-3xl font-semibold">Find a Trip</h4>

          <form onSubmit={submitHandler}>
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up Location"
            />

            <div className="absolute h-16 w-1 top-[98px] left-10 bg-gray-700 rounded-full"></div>

            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter Your Destination"
            />
          </form>
        </div>

        {/* Animated Panel */}
        <div ref={panelRef} className="bg-white h-0 ">
          <LocationSearchPanel
            setvechiclepanelopen={setvechiclepanelopen}
            setPanelOpen={setPanelOpen}
            setformpanelopen={setformpanelopen}
            // vechiclepanel={vechiclepanelRef}
            // setvechiclepanel={setvechiclepanelopen}
          />
        </div>
      </div>

      <div
        ref={vechiclepanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <Vechiclepanel
          setconfirmridepanel={setconfirmridepanel}
          setvechiclepanelopen={setvechiclepanelopen}
          setformpanelopen={setformpanelopen}
        />
      </div>

      <div
        ref={confirmrideref}
        className="fixed w-full z-10 opacity-0 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <Confirmride
          setvechiclepanelopen={setvechiclepanelopen}
          setformpanelopen={setformpanelopen}
          setconfirmridepanel={setconfirmridepanel}
          setvechiclefound={setvechiclefound}
        />
      </div>
      <div
        ref={vechiclefoundref}
        className="fixed w-full z-10 opacity-0 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <Lookingfordriver setvechiclefound={setvechiclefound} />
      </div>
      <div
        ref={waitingfordriverref}
        className="fixed w-full z-10 opacity-0 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <WaitForDriver setwaitingfordriver={setwaitingfordriver}/>
      </div>

      {/* CARD 1 */}

      {/* Remaining cards unchanged */}
    </div>
  );
};

export default Home;
