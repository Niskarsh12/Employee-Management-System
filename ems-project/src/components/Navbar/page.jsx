import Link from 'next/link';
import React from 'react';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Sign in',
    url: '/signin',
  },
  {
    id: 3,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" legacyBehavior>
            <a className="text-lg font-medium text-white">StaffSync</a>
          </Link>

          {/* Navigation links */}
          <div className="md:flex flex-row items-center p-2 gap-8 text-lg font-medium">
            {links.map((link) => (
              <Link href={link.url} key={link.id} legacyBehavior>
                <a className="text-white">
                  {link.title === 'Sign in' ? (
                    <button className="text-black rounded-lg p-2 bg-white">{link.title}</button>
                  ) : (
                    <a className="text-white">{link.title}</a>
                  )}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
