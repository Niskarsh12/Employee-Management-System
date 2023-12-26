import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';


const NavBar = ({ username }) => {
  const { userId } = auth();

  return (
    <div className='bg-black container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
      <div className='flex items-center justify-between h-16'>
        <Link href='/'>
          <div className='text-lg font-medium text-white ml-2'>
            StaffSync
          </div>
        </Link>
      </div>
      <div className='md:flex flex-row items-center p-2 gap-8 text-lg font-medium'>
        {!userId && (
          <>
          <div className='flex'>
              <Link
                href='/signin'
                className='text-black rounded-lg p-2 mr-2 bg-white'
              >
                Sign In
              </Link>
              <Link
                href='/dashboard'
                className='text-white p-2'
              >
                Dashboard
              </Link>
          </div>
          </>
        )}
        {userId && (
          <Link href='/profile' className='text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  )
} 

export default NavBar;
