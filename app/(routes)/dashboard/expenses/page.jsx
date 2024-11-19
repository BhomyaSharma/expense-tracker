"use client"
import { db } from '../../../../db/drizzle'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable'
import { Expenses } from '../../../../db/schema'
import { desc, eq } from 'drizzle-orm'
import { useSearchParams } from 'next/navigation'

const page = () => {
  const params = useSearchParams();


  const [expensesList, setExpensesList] = useState([]);
  const getExpensesList=async()=>{

    const result=await db.select().from(Expenses)
    .orderBy(desc(Expenses.id));
    setExpensesList(result);
    console.log(result)
    

}
useEffect(() => {
  getExpensesList();
}, [])

 


  return (
    <div>
      <ExpenseListTable expensesList={expensesList}/>
    </div>
  )
}

export default page
