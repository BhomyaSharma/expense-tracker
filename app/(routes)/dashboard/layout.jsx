"use client"
import React, { useEffect } from 'react'
import SideNav from './_components/SideNav'
import { Budgets } from '../../../db/schema.js'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

import { db } from '../../../db/drizzle'
import DashboardHeader from './_components/DashboardHeader'
import { useRouter } from 'next/navigation'

function DashboardLayout({ children }) {
  const { user } = useUser(); // Destructuring user from useUser
  const router = useRouter();
  useEffect(() => {
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  // Correct async function to check user budgets
  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress)); // Accessing user?.primaryEmailAddress correctly

    console.log(result);
    if (result?.length === 0) {
      router.replace('/dashboard/budgets');
    }
  };

  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
