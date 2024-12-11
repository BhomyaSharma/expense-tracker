<<<<<<< HEAD
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
// import { db } from '../../../../../db/drizzle';
// import { Expenses } from '../../../../../db/schema';
// import { eq } from 'drizzle-orm';
// import { Trash } from 'lucide-react';
// import React from 'react';
// import { toast } from 'sonner';

// function ExpenseListTable({ expensesList, refreshData }) { // Destructure props

//   const deleteExpense = async (expense) => {
//     const result = await db
//       .delete(Expenses)
//       .where(eq(Expenses.id, expense.id))
//       .returning();

//     if (result) {
//       toast('Expense Deleted');
//       refreshData();
//     }
//   };

//   return (
//     <div className='mt-3'>
//   {/* Animated heading for the expenses list */}
//   <h2 className='text-pink-600 font-extrabold text-2xl mb-4 text-center tracking-wide transition-transform transform hover:scale-105'>
//     Expenses List
//   </h2>

//   {/* Table header with a modern pink theme and subtle shadow */}
//   <div className='grid grid-cols-4 bg-pink-100 p-4 rounded-xl shadow-md'>
//     <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Name</h2>
//     <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Amount</h2>
//     <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Date</h2>
//     <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Action</h2>
//   </div>

 


//       {Array.isArray(expensesList) && expensesList.length > 0 ? (
//         expensesList.map((expenses, index) => (
//           <div key={index} className='grid grid-cols-4 bg-slate-50 p-2'>
//             <h2>{expenses.name}</h2>
//             <h2>{expenses.amount}</h2>
//             <h2>{expenses.createdAt}</h2>
//             <h2>
//               <Trash
//                 className='text-red-600 cursor-pointer'
//                 onClick={() => deleteExpense(expenses)}
//               />
//             </h2>
//           </div>
//         ))
//       ) : (
//         <p>No expenses available</p>
//       )}
//     </div>
//   );
// }

// export default ExpenseListTable;




// import { db } from '../../../../../db/drizzle';
// import { Expenses } from '../../../../../db/schema';
// import { eq } from 'drizzle-orm';
// import { Trash } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import { toast } from 'sonner';

// function ExpenseListTable({ expensesList, refreshData }) {
//   // State hooks for pagination, search, and sorting
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredExpenses, setFilteredExpenses] = useState(expensesList);
//   const itemsPerPage = 5;

//   // Fetch expenses when the component mounts or the expensesList prop changes
//   useEffect(() => {
//     setFilteredExpenses(expensesList);
//   }, [expensesList]);

//   // Function to handle expense deletion with confirmation
//   const deleteExpense = async (expense) => {
//     const confirmed = window.confirm('Are you sure you want to delete this expense?');
//     if (confirmed) {
//       const result = await db
//         .delete(Expenses)
//         .where(eq(Expenses.id, expense.id))
//         .returning();

//       if (result) {
//         toast('Expense Deleted');
//         refreshData(); // Refresh data after deletion
//       }
//     }
//   };

//   // Function to handle sorting
//   const sortExpenses = (column) => {
//     const sorted = [...filteredExpenses].sort((a, b) => {
//       if (column === 'name') return a.name.localeCompare(b.name);
//       if (column === 'amount') return a.amount - b.amount;
//       if (column === 'date') return new Date(a.createdAt) - new Date(b.createdAt);
//     });
//     setFilteredExpenses(sorted);
//   };

//   // Handle search functionality (filter on entire dataset)
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const searchQuery = e.target.value.toLowerCase();

//     const filtered = expensesList.filter((expense) =>
//       expense.name.toLowerCase().includes(searchQuery) ||
//       expense.amount.toString().includes(searchQuery) ||
//       new Date(expense.createdAt).toLocaleDateString().includes(searchQuery)
//     );
//     setFilteredExpenses(filtered);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);
//   const currentExpenses = filteredExpenses.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="mt-3">
//       <h2 className="text-pink-600 font-extrabold text-2xl mb-4 text-center tracking-wide transition-transform transform hover:scale-105">
//         Expenses List
//       </h2>

//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="Search by name, amount or date"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="p-2 mb-4 rounded-md border border-gray-300 w-full"
//       />

//       {/* Table header */}
//       <div className="grid grid-cols-4 bg-pink-100 p-4 rounded-xl shadow-md">
//         <h2
//           className="font-bold text-pink-800 text-lg tracking-wider cursor-pointer"
//           onClick={() => sortExpenses('name')}
//         >
//           Name
//         </h2>
//         <h2
//           className="font-bold text-pink-800 text-lg tracking-wider cursor-pointer"
//           onClick={() => sortExpenses('amount')}
//         >
//           Amount
//         </h2>
//         <h2
//           className="font-bold text-pink-800 text-lg tracking-wider cursor-pointer"
//           onClick={() => sortExpenses('date')}
//         >
//           Date
//         </h2>
//         <h2 className="font-bold text-pink-800 text-lg tracking-wider">Action</h2>
//       </div>

//       {/* Display the filtered list of expenses */}
//       {currentExpenses.length > 0 ? (
//         currentExpenses.map((expense, index) => (
//           <div key={index} className="grid grid-cols-4 bg-slate-50 p-2">
//             <h2>{expense.name}</h2>
//             <h2>{expense.amount}</h2>
//             <h2>{new Date(expense.createdAt).toLocaleDateString()}</h2>
//             <h2>
//               <Trash
//                 className="text-red-600 cursor-pointer"
//                 onClick={() => deleteExpense(expense)}
//               />
//             </h2>
//           </div>
//         ))
//       ) : (
//         <p>No expenses available</p>
//       )}

//       {/* Pagination controls */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//           className="px-4 py-2 bg-pink-600 text-white rounded-md"
//         >
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage(currentPage + 1)}
//           className="px-4 py-2 bg-pink-600 text-white rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ExpenseListTable;


// 



// import { useState, useEffect } from 'react';
// import { db } from '../../../../../db/drizzle';
// import { Expenses } from '../../../../../db/schema';
// import { eq } from 'drizzle-orm';
// import { Trash } from 'lucide-react';
// import { toast } from 'sonner';

// function ExpenseListTable({ expensesList, refreshData }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredExpenses, setFilteredExpenses] = useState(expensesList);
//   const [sortOption, setSortOption] = useState('date');
//   const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
//   const itemsPerPage = 5;

//   useEffect(() => {
//     setFilteredExpenses(expensesList);
//   }, [expensesList]);

//   const deleteExpense = async (expense) => {
//     const result = await db
//       .delete(Expenses)
//       .where(eq(Expenses.id, expense.id))
//       .returning();

//     if (result) {
//       toast('Expense Deleted');
//       refreshData();
//     }
//   };

//   const sortExpenses = (option, order) => {
//     let sorted;
//     if (option === 'date') {
//       sorted = [...filteredExpenses].sort((a, b) =>
//         order === 'asc'
//           ? new Date(a.createdAt) - new Date(b.createdAt)
//           : new Date(b.createdAt) - new Date(a.createdAt)
//       );
//     } else if (option === 'month') {
//       sorted = [...filteredExpenses].sort((a, b) =>
//         order === 'asc'
//           ? new Date(a.createdAt).getMonth() - new Date(b.createdAt).getMonth()
//           : new Date(b.createdAt).getMonth() - new Date(a.createdAt).getMonth()
//       );
//     } else if (option === 'amount') {
//       sorted = [...filteredExpenses].sort((a, b) =>
//         order === 'asc' ? a.amount - b.amount : b.amount - a.amount
//       );
//     }
//     setFilteredExpenses(sorted);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const searchQuery = e.target.value.toLowerCase();

//     const filtered = expensesList.filter((expense) =>
//       expense.name.toLowerCase().includes(searchQuery) ||
//       expense.amount.toString().includes(searchQuery) ||
//       new Date(expense.createdAt).toLocaleDateString().includes(searchQuery)
//     );
//     setFilteredExpenses(filtered);
//     setCurrentPage(1);
//   };

//   const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
//   const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);
//   const currentExpenses = filteredExpenses.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="mt-3">
//       <h2 className="text-pink-600 font-extrabold text-2xl mb-4 text-center tracking-wide transition-transform transform hover:scale-105">
//         Expenses List
//       </h2>

//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="Search by name, amount or date"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="p-2 mb-4 rounded-md border border-gray-300 w-full"
//       />

//       {/* Sort by dropdown */}
//       <div className="mb-4">
//         <label htmlFor="sortOption" className="font-semibold text-pink-800">Sort by:</label>
//         <select
//           id="sortOption"
//           value={sortOption}
//           onChange={(e) => {
//             const newSortOption = e.target.value;
//             setSortOption(newSortOption);
//             sortExpenses(newSortOption, sortOrder);
//           }}
//           className="ml-2 p-2 rounded-md border border-gray-300"
//         >
//           <option value="date">Date</option>
//           <option value="month">Month</option>
//           <option value="amount">Amount</option>
//         </select>
//         {/* Sort Order (ascending/descending) */}
//         <select
//           value={sortOrder}
//           onChange={(e) => {
//             const newSortOrder = e.target.value;
//             setSortOrder(newSortOrder);
//             sortExpenses(sortOption, newSortOrder);
//           }}
//           className="ml-2 p-2 rounded-md border border-gray-300"
//         >
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>

//       {/* Table header */}
//       <div className="grid grid-cols-4 bg-pink-100 p-4 rounded-xl shadow-md">
//         <h2 className="font-bold text-pink-800 text-lg tracking-wider">Name</h2>
//         <h2 className="font-bold text-pink-800 text-lg tracking-wider">Amount</h2>
//         <h2 className="font-bold text-pink-800 text-lg tracking-wider">Date</h2>
//         <h2 className="font-bold text-pink-800 text-lg tracking-wider">Action</h2>
//       </div>

//       {/* Display expenses */}
//       {currentExpenses.length > 0 ? (
//         currentExpenses.map((expense, index) => (
//           <div key={index} className="grid grid-cols-4 bg-slate-50 p-2">
//             <h2>{expense.name}</h2>
//             <h2>{expense.amount}</h2>
//             <h2>{new Date(expense.createdAt).toLocaleDateString()}</h2>
//             <h2>
//               <Trash
//                 className="text-red-600 cursor-pointer"
//                 onClick={() => deleteExpense(expense)}
//               />
//             </h2>
//           </div>
//         ))
//       ) : (
//         <p>No expenses available</p>
//       )}

//       {/* Summary */}
//       <div className="mt-4 text-right">
//         <p><strong>Total Amount: ${totalAmount}</strong></p>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//           className="px-4 py-2 bg-pink-600 text-white rounded-md"
//         >
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage(currentPage + 1)}
//           className="px-4 py-2 bg-pink-600 text-white rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ExpenseListTable;





=======
import React, { useEffect, useState } from "react";
>>>>>>> 9213a730a163cf4a1a61e027e17822f327448e56
import { db } from '../../../../../db/drizzle';
import { Expenses } from '../../../../../db/schema';
import { eq } from 'drizzle-orm';
import { Trash } from 'lucide-react';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

function ExpenseListTable({ expensesList, refreshData }) {
  // State to handle sort options
  const [sortBy, setSortBy] = useState('Date');
  const [sortOrder, setSortOrder] = useState('Ascending');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle sorting logic
  const sortExpenses = () => {
    return [...expensesList]
      .filter((expense) => {
        return (
          expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          expense.amount.toString().includes(searchTerm) ||
          expense.createdAt.includes(searchTerm)
        );
      })
      .sort((a, b) => {
        let aValue, bValue;

        if (sortBy === 'Amount') {
          aValue = parseFloat(a.amount);
          bValue = parseFloat(b.amount);
        } else if (sortBy === 'Date') {
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
        } else {
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        }

        if (sortOrder === 'Ascending') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
  };

  const sortedExpenses = sortExpenses();
=======
import { toast } from 'sonner';

function ExpenseListTable({ expensesList, refreshData }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState(expensesList);
>>>>>>> 9213a730a163cf4a1a61e027e17822f327448e56

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
<<<<<<< HEAD
      {/* Search bar */}
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by name, amount or date'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Ensure this is updating the searchTerm state
          className='p-2 border border-pink-300 rounded-lg w-full'
        />
      </div>

      {/* Sort options - closer together */}
      <div className='flex justify-start items-center gap-4 mb-4'>
        <div className='flex items-center'>
          <label htmlFor='sortBy' className='mr-2'>Sort by:</label>
          <select
            id='sortBy'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='p-2 border border-pink-300 rounded-lg'>
            <option value='Date'>Date</option>
            <option value='Amount'>Amount</option>
            <option value='Name'>Name</option>
          </select>
        </div>

        <div className='flex items-center'>
          <label htmlFor='sortOrder' className='mr-2'>Order:</label>
          <select
            id='sortOrder'
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className='p-2 border border-pink-300 rounded-lg'>
            <option value='Ascending'>Ascending</option>
            <option value='Descending'>Descending</option>
          </select>
        </div>
      </div>

      {/* Animated heading for the expenses list */}
      <h2 className='text-pink-600 font-extrabold text-2xl mb-4 text-center tracking-wide transition-transform transform hover:scale-105'>
        Expenses List
      </h2>

      {/* Table header with a modern pink theme and subtle shadow */}
      <div className='grid grid-cols-4 bg-pink-100 p-4 rounded-xl shadow-md'>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Name</h2>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Amount</h2>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Date</h2>
        <h2 className='font-bold text-pink-800 text-lg tracking-wider'>Action</h2>
      </div>

      {Array.isArray(sortedExpenses) && sortedExpenses.length > 0 ? (
        sortedExpenses.map((expense, index) => (
          <div key={index} className='grid grid-cols-4 bg-slate-50 p-2'>
            <h2>{expense.name}</h2>
            <h2>{expense.amount}</h2>
            <h2>{expense.createdAt}</h2>
=======
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
>>>>>>> 9213a730a163cf4a1a61e027e17822f327448e56
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
