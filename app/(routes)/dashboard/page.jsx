"use client"
import React, { useEffect, useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import CardInfo from './_components/CardInfo';
import { db } from '@/db/drizzle';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/db/schema';
import BarChartDashboard from './budgets/_components/BarChartDashboard';
import Budget from './budgets/page';
import BudgetItem from './budgets/_components/BudgetItem';
function Dashboard() {
  const {user}=useUser();
  const [budgetList,setBudgetList]=useState([]);
  


  useEffect(()=>{
    getBudgetList();


  },[user])

  /**
   * used to get budget list
   */

  const getBudgetList=async()=>{

    const result=await db.select({
      ...getTableColumns(Budgets),
     
      totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql `count(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id))
    ;
    setBudgetList(result);
     console.log(result)
    
  }

  return (
    <div className='p-8'>
        <h2 className='font-bold text-3xl'>hi, {user?.fullName} ✌️</h2>
        <p className='text-gray-500'>Here's what happening with your money, Lets Manage your expenses</p>



        <CardInfo budgetList={budgetList}/>
        
        <div className='grid grid-cols-1 md:grid-cols-3 mt-6'>
          <div className='md:col-span-2'>
              <BarChartDashboard
                budgetList={budgetList}/>

          </div>
          <div>
            {budgetList?.map((budget,index)=>(
              <BudgetItem budget={budget} key={index}/>

            ))}
          </div>


        </div>
        </div>
  )
}

export default Dashboard