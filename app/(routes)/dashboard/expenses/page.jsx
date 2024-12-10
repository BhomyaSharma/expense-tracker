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
// "use client";

// import React, { useEffect, useState } from 'react';
// import { db } from '../../../../db/drizzle';
// import ExpenseListTable from './_components/ExpenseListTable';
// import { Expenses } from '../../../../db/schema';
// import { desc } from 'drizzle-orm';
// import { useParams } from 'next/navigation'; 

// const Page = () => {
//   const [expensesList, setExpensesList] = useState([]);
//   const params = React.use(useParams()); 

//   const getExpensesList = async () => {
//     if (!params?.id) return; // Ensure params.id exists
//     const result = await db
//       .select()
//       .from(Expenses)
//       .where(Expenses.budgetId.equals(params.id)) // Assuming you're filtering by budgetId
//       .orderBy(desc(Expenses.id));
//     setExpensesList(result);
//     console.log(result);
//   };

//   useEffect(() => {
//     getExpensesList();
//   }, [params]);

//   return (
//     <div>
//       {params?.id ? (
//         <ExpenseListTable expensesList={expensesList} refreshData={getExpensesList} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Page;