"use client"
import React from 'react'
import Image from "next/image";
import { Button } from '../../components/ui/button';
import { useUser, UserButton } from "@clerk/nextjs";
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-5 flex justify-between items-center '>
      <Image 
        src={'/logo.jpg'} 
        alt='dashboard'
        width={90}
        height={90}
        className=''
      />

      <Link href={'/dashboard'}>
        <Button>Dashboard</Button>
      </Link>

      {isSignedIn ? (
        <UserButton />  // Render only when the user is signed in
      ) : (
        <Link href={'/sign-in'}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
