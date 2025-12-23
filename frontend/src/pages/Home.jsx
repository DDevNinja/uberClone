import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className= 'bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8  w-full flex justify-between flex-col'>
            <img  className="w-[16%] ml-8 rounded-[10%]" src="https://www.citypng.com/public/uploads/preview/uber-text-word-white-logo-png-701751694707221r0neubngm8.png" alt="" />
            <div className='bg-white pb-7 py-5 px-5' >
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center bg-black text-white w-full py-3 rounded-lg mt-4'>Continue</Link>
            </div>

        </div>
    </div>
  );
}; 

export default Home;