import React, { createContext, useState } from 'react';

export const UserDataContext=createContext();
const Usercontext = ({children}) => {
    const [user, setuser] = useState({
        email:'',
        password:'',
        fullname:{
            firstname:'',
            lastname:'' 
        }
    });
  return (
    <div>
        <UserDataContext.Provider value={{}}>
            {children}
        </UserDataContext.Provider>
    </div>  
  );
};

export default Usercontext;