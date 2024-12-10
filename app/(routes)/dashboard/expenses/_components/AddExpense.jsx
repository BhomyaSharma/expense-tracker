import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { db } from '../../../../../db/drizzle';
import { Expenses } from '../../../../../db/schema'; // Import Expenses schema
import React, { useState } from 'react';
import { toast } from 'sonner';
import moment from 'moment'; // For date formatting

function AddExpense({ budgetId, user, refreshData }) {  // Expect budgetId as a prop
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(''); // Add category state

  const addNewExpense = async () => {
    // Validate fields
    if (!name || !amount || !category) {
      toast('All fields are required', { type: 'error' });
      return;
    }

    try {
      // Insert new expense into the database
      const result = await db.insert(Expenses).values({
        name: name,
        amount: parseFloat(amount), // Ensure amount is stored as a number
        budgetId: budgetId,  // Use budgetId prop
        category: category,  // Include category in the database
        createdAt: moment().format('YYYY-MM-DD'),  // Use ISO date format
      });

      if (result) {
        // Refresh data and reset form
        refreshData();
        toast('New Expense Added');
        setName('');
        setAmount('');
        setCategory('');
      }
    } catch (error) {
      console.error("Error adding expense:", error);
      toast('Failed to add expense', { type: 'error' });
    }
  };

  return (
    <div className='border p-5 rounded-lg'>
      <h2 className='font-bold text-lg'>Add Expenses</h2>
      
      {/* Expense Name */}
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Expense Amount */}
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Amount</h2>
        <Input
          placeholder="e.g. 1000"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Expense Category */}
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Category</h2>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Category</option> {/* Placeholder option */}
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      {/* Add Expense Button */}
      <Button
        disabled={!(name && amount && category)} // Disable button if fields are empty
        onClick={addNewExpense}
        className="mt-3 w-full"
      >
        Add New Expense
      </Button>
    </div>
  );
}

export default AddExpense;
