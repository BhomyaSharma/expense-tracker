"use client"
import { Button } from '../../../../../components/ui/button';
import { db } from '../../../../../db/drizzle';
import { Budgets, Expenses } from '../../../../../db/schema';
import { useUser } from '@clerk/nextjs';
import { eq, getTableColumns, sql, desc } from 'drizzle-orm';
import { Trash } from 'lucide-react';
import React, {useEffect, useState} from 'react'
import BudgetItem from '../../budgets/_components/BudgetItem';
import AddExpense from '../_components/AddExpense';
import ExpenseListTable from '../_components/ExpenseListTable';
import upgrades from '../../upgrade/upgrades';
import { useRouter } from 'next/navigation';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../../../../../components/ui/alert-dialog"
import { toast } from 'sonner';
  
function ExpensesScreen({params}) {
    const {user}=useUser();
    const [BudgetInfo,setBudgetInfo]=useState();
    const [expensesList,setExpensesList]=useState([]);
    const route=useRouter();
    useEffect(()=>{
        
        user&&getBudgetInfo();
        

    },[user]);
    /**
     * get budget information
     */

    const getBudgetInfo=async()=>{
        const result=await db.select({
            ...getTableColumns(Budgets),
            totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql `count(${Expenses.id})`.mapWith(Number)
          }).from(Budgets)
          .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
          .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
          .where(eq(Budgets.id,params.id))
          .groupBy(Budgets.id)
          
          setBudgetInfo(result[0]);
          getExpensesList();

    }
    
    /**
     * get latest expenses
     */

    const getExpensesList=async()=>{
        const result=await db.select().from(Expenses)
        .where(eq(Expenses.budgetId,params.id))
        .orderBy(desc(Expenses.id));
        setExpensesList(result);

        console.log(result)

    }
    /**
     * used to delete a budget
     */

    const deleteBudget=async()=>{
        const deleteExpenseresult=await db.delete(Expenses)
        .where(eq(Expenses.budgetId,params.id))
        .returning()

        if(deleteExpenseresult){

        
        const result=await db.delete(Budgets)
        .where(eq(Budgets.id,params.id))
        .returning();

        }
        toast('Budget Deleted !');
        route.replace('/dashboard/budgets');
        

        
    }
  return (
    <div className='p-10'>
        <h2 className='text-2xl font-bold flex justify-between items-center'>My Expenses
        
            <Button className="flex-gap-2 z-10" variant="destructive"> 
            <Trash/>Delete</Button>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button className="flex-gap-2 z-10" variant="destructive"> 
            <Trash/>Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your current budget along with expenses
                            and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={()=>deleteBudget()}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 , mt-6 gap-5'>
            {BudgetInfo? <BudgetItem
            budget={BudgetInfo}
            />:
            <div className='h-[150px] w-full bg-slate-200 
            rounded-lg animate-pulse' >

            </div>}
            <AddExpense budgetId={params.id}
            user={user}
            refreshData={()=>getBudgetInfo()}
            />

        </div>
        <div className='mt-4'>
            <h2 className='font-bold text-lg'>Latest Expenses</h2>
            <ExpenseListTable expensesList={expensesList}
            refreshData={()=>getBudgetInfo()}/>
        </div>
    </div>
  )
}

export default ExpensesScreen
