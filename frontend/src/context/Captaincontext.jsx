// import { createContext, useState,useContext } from "react";

// export const CaptainDataContext = createContext(null);

// export const useCaptain=()=>{
//     const context = useContext(CaptainDataContext);
//     if(!context){
//         throw new Error ('useCaptain must be used within a captainProvider');
//     }
//     return context;
// };

import { createContext, useState } from "react";

export const CaptainDataContext = createContext(null);

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  return (
    <CaptainDataContext.Provider
      value={{
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
      }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
