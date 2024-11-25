

import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { db } from '../../../../../db/drizzle';
import { Budgets, Expenses } from '../../../../../db/schema'; // Import Expenses schema
import React, { useState } from 'react';
import { toast } from 'sonner';
import moment from 'moment'; // Assuming you are using moment for date formatting

function AddExpense({ budgetId, user, refreshData }) {  // Expect budgetId as a prop
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addNewExpense = async () => {
    const result = await db.insert(Expenses).values({
      name: name,
      amount: amount,
      budgetId: budgetId,  // Use budgetId prop
      createdAt: moment().format('DD/MM/yyyy')  // Corrected date format
    }).returning({ insertedId: Budgets.id });

    console.log(result);
    if (result) {
      refreshData();
      toast('New Expense Added');
    }
  }

  return (
    <div className='border p-5 rounded-lg'>
      <h2 className='font-bold text-lg'>Add Expenses</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Amount</h2>
        <Input
          placeholder="e.g. 1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount)}
        onClick={addNewExpense}
        className="mt-3 w-full"
      >
        Add New Expense
      </Button>
    </div>
  );
}

export default AddExpense;
