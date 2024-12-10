import { Request, Response } from "express";
import { Budgets } from '/Users/apple/expense-tracker/db/schema.js';
import { db } from '/Users/apple/expense-tracker/db/drizzle.js';
import { eq } from 'drizzle-orm';

const deleteBudget = async (req: Request, res: Response) => {
  const { budgetId } = req.params;

  // Validation for missing parameter
  if (!budgetId) {
    return res
      .status(400)
      .json({ error: "missing_parameter", message: "budgetId is required" });
  }

  try {
    // Deleting the budget using Drizzle ORM
    const result = await db.delete(Budgets).where(eq(Budgets.id, Number(budgetId))).returning();

    if (result.length === 0) {
      return res
        .status(404)
        .json({ error: "not_found", message: "Budget not found" });
    }

    // Return success response
    return res.status(200).json({ message: "Budget deleted successfully", deletedBudget: result[0] });
  } catch (error) {
    console.error("Error while deleting budget", error);

    // Return server error response
    return res
      .status(500)
      .json({ error: "server_error", message: "Internal Server Error" });
  }
};

export default deleteBudget;
