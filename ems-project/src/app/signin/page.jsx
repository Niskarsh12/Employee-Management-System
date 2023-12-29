import { SignIn } from '@clerk/nextjs';
import React from 'react';


const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 via-cyan-600 to-pink-500 pb-12">
      <div className="text-center md:text-left">
        <h1 className="mb-4 p-6 text-4xl font-bold md:p-24 md:text-5xl">Sign In Here!</h1>
        <div className="flex flex-col items-center">
          <SignIn className="mb-8" afterSignInUrl='/dashboard' />
        </div>
      </div>
    </div>
  );
};

export default Signin;