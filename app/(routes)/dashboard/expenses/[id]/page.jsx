

"use client";

import { Button } from "../../../../../components/ui/button";
import { db } from "../../../../../db/drizzle";
import { Budgets, Expenses } from "../../../../../db/schema";
import { useUser } from "@clerk/nextjs";
import { eq, getTableColumns, sql, desc } from "drizzle-orm";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
import ExpenseListTable from "../_components/ExpenseListTable";
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
} from "../../../../../components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function ExpensesScreen({ params }) {
  const { user } = useUser();
  const [BudgetInfo, setBudgetInfo] = useState();
  const [expensesList, setExpensesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  useEffect(() => {
    if (user) {
      getBudgetInfo();
    }
  }, [user]);

 
  const getBudgetInfo = async () => {
    try {
      setLoading(true);
      const [budgetResult, expensesResult] = await Promise.all([
        db
          .select({
            ...getTableColumns(Budgets),
            totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql`count(${Expenses.id})`.mapWith(Number),
          })
          .from(Budgets)
          .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
          .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
          .where(eq(Budgets.id, params.id))
          .groupBy(Budgets.id),
        db
          .select()
          .from(Expenses)
          .where(eq(Expenses.budgetId, params.id))
          .orderBy(desc(Expenses.id)),
      ]);

      setBudgetInfo(budgetResult[0]);
      setExpensesList(expensesResult);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getExpensesList=async()=>{

    const result=await db.select().from(Expenses)
    .where(eq(Expenses.budgetId,params.id))
    .orderBy(desc(Expenses.id));
    setExpensesList(result);
    console.log(result)
    

}
  
  const deleteBudget = async () => {
    // try {
    //   await db.transaction(async (tx) => {
    //     await tx.delete(Expenses).where(eq(Expenses.budgetId, params.id));
    //     await tx.delete(Budgets).where(eq(Budgets.id, params.id));
    //   });
    //   toast.success("Budget Deleted!");
    //   route.replace("/dashboard/budgets");
    // } catch (error) {
    //   console.error("Error deleting budget:", error);
    //   toast.error("Failed to delete budget. Please try again.");
    // }
    const deleteExpenseResult=await db.delete(Expenses)
    .returning()

    if(deleteExpenseResult){
      const result = await db.delete(Budgets)
      .where(eq(Budgets.id,params.id))
      .returning();

    }
    toast('Budget Deleted !');
    route.replace('/dashboard/budgets')
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold flex justify-between items-center bg-white">
        My Expenses
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex-gap-2 z-10" variant="destructive">
              <Trash />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-blue-100">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                current budget along with expenses and remove your data from our
                servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={()=>deleteBudget()}>Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </h2>


<div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        {BudgetInfo ? (
          <BudgetItem budget={BudgetInfo} />
        ) : (
          <div className="h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense
          budgetId={params.id}
          user={user}
          refreshData={getBudgetInfo}
        />
      </div>

      <div className="mt-4">
        <h2 className="font-bold text-lg">Latest Expenses</h2>
        <ExpenseListTable
          expensesList={expensesList}
          refreshData={getBudgetInfo}
        />
      </div>
    </div>
  );
}

export default ExpensesScreen;