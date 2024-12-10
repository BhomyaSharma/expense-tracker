import React, { useEffect, useState } from "react";
import { db } from '../../../../../db/drizzle';
import { Expenses } from '../../../../../db/schema';
import { eq } from 'drizzle-orm';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

function ExpenseListTable({ expensesList, refreshData }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState(expensesList);

  // Define expense categories for filtering
  const categories = ["Food", "Travel", "Entertainment"];

  // Handle filter button clicks
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(selectedFilters.filter((category) => category !== selectedCategory));
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  // Filter expenses whenever selectedFilters or expensesList changes
  useEffect(() => {
    if (selectedFilters.length > 0) {
      const tempFiltered = expensesList.filter((expense) =>
        selectedFilters.includes(expense.category)
      );
      setFilteredExpenses(tempFiltered);
    } else {
      setFilteredExpenses(expensesList);
    }
  }, [selectedFilters, expensesList]);

  // Delete an expense
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
      {/* Heading */}
      <h2 className='text-pink-600 font-extrabold text-2xl mb-4 text-center tracking-wide transition-transform transform hover:scale-105'>
        Expenses List
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        {categories.map((category, idx) => (
          <button
            key={`filter-${idx}`}
            onClick={() => handleFilterButtonClick(category)}
            className={`px-4 py-2 rounded-lg border ${
              selectedFilters.includes(category)
                ? "bg-pink-500 text-white"
                : "bg-white text-pink-500 border-pink-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className='grid grid-cols-4 bg-pink-100 p-4 rounded-xl shadow-md'>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Name</h2>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Amount</h2>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Category</h2>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Action</h2>
      </div>

      {/* Filtered Expenses */}
      {Array.isArray(filteredExpenses) && filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense, index) => (
          <div key={index} className='grid grid-cols-4 bg-slate-50 p-2'>
            <h2>{expense.name}</h2>
            <h2>{expense.amount}</h2>
            <h2>{expense.category}</h2>
            <h2>
              <Trash
                className='text-red-600 cursor-pointer'
                onClick={() => deleteExpense(expense)}
              />
            </h2>
          </div>
        ))
      ) : (
        <p className="text-center mt-4 text-gray-500">No expenses available</p>
      )}
    </div>
  );
}

export default ExpenseListTable;
