import { UserButton } from '@clerk/nextjs';
import React from 'react';


const Signin = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 via-cyan-600 to-pink-500">
      <div className="container mx-auto flex items-center justify-center md:grid md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="p-6 md:p-24 text-4xl md:text-5xl font-bold">Let's Sign In Here!</h1>
          {/* <p className="px-6 md:pl-24 md:pr-2 text-lg font-medium">
            
          </p> */}
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  );
};


export default Signin;
