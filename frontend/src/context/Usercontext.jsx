import { createContext, useState } from "react";

export const UserDataContext = createContext(null);

const Usercontext = ({ children }) => {
  const [user, setuser] = useState({
        email:'',
        password:'',
        fullname:{
            firstname:'',
            lastname:'' 
        }
    });

  return (
    <UserDataContext.Provider value={{ user, setuser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default Usercontext;
