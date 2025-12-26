import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Userlogin from './pages/Userlogin.jsx';  
import UserSignup from './pages/UserSignup.jsx';
import Captainlogin from './pages/Captainlogin.jsx';
import CaptainSignup from './pages/CaptainSignup.jsx';
import Start from './pages/Start.jsx';
import UserProtectedWrapper from './pages/userProtectedWrapper.jsx';
import Userlogout from './pages/Userlogout.jsx';
import Captainhome from './pages/Captainhome.jsx';
import Captainlogout from './pages/Captainlogout.jsx';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx';
import Riding from "./pages/Riding.jsx"
import CaptainRidingmap from "./pages/CaptainRidingmap.jsx"
const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Start/>}/>

        <Route path='/login' element={<Userlogin/>}/>

        <Route path='/signup' element={<UserSignup/>}/>

        <Route path='/captain-login' element={<Captainlogin/>}/>

        <Route path='/captain-signup' element={<CaptainSignup/>}/>

        <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>

        {/* <Route path="user/logout" element={<UserProtectedWrapper><Userlogout/></UserProtectedWrapper>}/> */}
              {/* LOGOUT (NOT PROTECTED) */}
      <Route path="/users/logout" element={<Userlogout />} />

      <Route path='/captain-home' element={<CaptainProtectedWrapper><Captainhome/></CaptainProtectedWrapper>}/>

      <Route path="/captains/logout" element={<Captainlogout />} />

       <Route path='/riding' element={<Riding/>}/>

       <Route path='/captain-riding' element={<CaptainRidingmap/>}/>



      </Routes>
      {/* very important logic and animation in home.jsx file  */}
    </div>
  );
};


export default App;