import React from 'react';


const Footer = () => {
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white md:pl-24">Let's Talk</h1>
          <p className="pt-4 pb-2 text-white font-medium leading-6 md:pl-24">
            Every project starts with a chat, and we'll be happy to discuss yours. Drop us an email for a coffee chat ☕️
          </p>
        </div>
        <div className="md:pl-36 md:pt-4">
          <div>
            <h1 className="font-bold text-white">Email: staffsync@gmail.com</h1>
          </div>
          <div className="pt-4">
            <h1 className="font-bold text-white">Phone: (+65) 9873 5984</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
