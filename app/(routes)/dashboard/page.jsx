"use client";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "../../../db/drizzle";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "../../../db/schema";
import BarChartDashboard from "./budgets/_components/BarChartDashboard";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";

function Dashboard() {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBudgetData();
    }
  }, [user]);

  /**
   * Fetch budget list & expenses
   */
  const fetchBudgetData = async () => {
    try {
      setLoading(true);

      const budgetResult = await db
        .select({
          ...getTableColumns(Budgets),
          totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`count(${Expenses.id})`.mapWith(Number),
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetList(budgetResult);

      const expensesResult = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt,
        })
        .from(Budgets)
        .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id));

      setExpensesList(expensesResult);
    } catch (error) {
      console.error("Error fetching budget data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      {loading ? (
        <p className="text-gray-500">Loading dashboard data...</p>
      ) : (
        <>
          <h2 className="font-bold text-3xl">Hi, {user?.fullName} ✌️</h2>
          <p className="text-gray-500">
            Here's what’s happening with your money. Let’s manage your expenses.
          </p>

          <CardInfo budgetList={budgetList} />

          <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
            <div className="md:col-span-2">
              <BarChartDashboard budgetList={budgetList} suppressHydrationWarning />
              <ExpenseListTable expensesList={expensesList} refreshData={fetchBudgetData} />
            </div>
            <div className="grid gap-5">
              <h2 className="font-bold text-lg">Latest Budgets</h2>
              {budgetList.length > 0 ? (
                budgetList.map((budget, index) => <BudgetItem budget={budget} key={index} />)
              ) : (
                <p className="text-gray-500">No budgets available.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
