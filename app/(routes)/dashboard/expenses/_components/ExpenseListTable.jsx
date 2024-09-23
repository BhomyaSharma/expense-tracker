// import { db } from '@/db/drizzle'
// import { Expenses } from '@/db/schema'
// import { eq } from 'drizzle-orm'
// import { Trash } from 'lucide-react'
// import React from 'react'
// import { toast } from 'sonner'

// function ExpenseListTable({expensesList,refreshData}) {

//     const deleteExpense=async(expense)=>{
//         const result=await db.delete(Expenses)
//         .where(eq(Expenses.id,expense.id,expense.id))
//         .returning();

//         if(result){
//             toast('Expense Deleted');
//             refreshData()
//         }

//     }
//   return (
//     <div className='mt-3'>
//         <div className='grid grid-cols-4 bg-slate-200 p-2'>
//             <h2 className='font-bold'>Name</h2>
//             <h2 className='font-bold'>Amount</h2>
//             <h2 className='font-bold'>Date</h2>
//             <h2 className='font-bold'>Action</h2>
//         </div>
//         {expensesList.map((expenses,index)=>(
//             <div className='grid grid-cols-4 bg-slate-50 p-2'>
//             <h2>{expenses.name}</h2>
//             <h2>{expenses.amount}</h2>
//             <h2>{expenses.createdAt}</h2>
//             <h2>
//                 <Trash className='text-red-600 cursor-pointer'
//                     onClick={()=>deleteExpense(expenses)}/>
//             </h2>
//         </div>

//         ))}
      
//     </div>
//   )
// }

// export default ExpenseListTable
import { db } from '@/db/drizzle';
import { Expenses } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Trash } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

function ExpenseListTable({ expensesList, refreshData }) { // Destructure props

  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast('Expense Deleted');
      refreshData();
    }
  };

  return (
    <div className='mt-3'>
      <div className='grid grid-cols-4 bg-slate-200 p-2'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Action</h2>
      </div>
      {Array.isArray(expensesList) && expensesList.length > 0 ? (
        expensesList.map((expenses, index) => (
          <div key={index} className='grid grid-cols-4 bg-slate-50 p-2'>
            <h2>{expenses.name}</h2>
            <h2>{expenses.amount}</h2>
            <h2>{expenses.createdAt}</h2>
            <h2>
              <Trash
                className='text-red-600 cursor-pointer'
                onClick={() => deleteExpense(expenses)}
              />
            </h2>
          </div>
        ))
      ) : (
        <p>No expenses available</p>
      )}
    </div>
  );
}

export default ExpenseListTable;
