"use client"; // Mark the component as a Client Component

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutGrid,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Budgets',
      icon: PiggyBank,
      path: '/dashboard/budgets'
    },
    {
      id: 3,
      name: 'Expenses',
      icon: ReceiptText,
      path: '/dashboard/expenses',
    },
    {
      id: 4,
      name: 'Upgrade',
      icon: ShieldCheck,
      path: '/dashboard/upgrade',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src={'/logo.jpg'} alt="logo" width={100} height={80} />
      <div className="mt-5">
        {menuList?.map((menu,index) => (

          <Link map={menu.path} href={menu.path} key={menu.id}>
            <h2
              className={`flex gap-2 items-center
                 text-gray-500 font-medium
                 mb-2
              p-5 cursor-pointer rounded-md
                 hover:text-primary hover:bg-blue-100
              ${path === menu.path && 'text-primary bg-blue-100'}
              `}
            >
              <menu.icon/>
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default SideNav;
