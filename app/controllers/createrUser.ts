import { Request, Response } from "express";
import { Budgets } from '/Users/apple/expense-tracker/db/schema.js';
import { db } from '/Users/apple/expense-tracker/db/drizzle.js';

const createBudget = async (req: Request, res: Response) => {
  const { name, amount, createdBy, icon }: { name: string; amount: string; createdBy: string; icon: string } = req.body;

  // Basic validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "validation_error", message: "Name is required" });
  }
  if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
    return res
      .status(400)
      .json({ error: "validation_error", message: "Amount must be a positive number" });
  }
  if (!createdBy || typeof createdBy !== "string" || createdBy.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "validation_error", message: "CreatedBy is required" });
  }
  if (!icon || typeof icon !== "string" || icon.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "validation_error", message: "Icon is required" });
  }

  try {
    // Insert into the database using Drizzle ORM
    const result = await db
      .insert(Budgets)
      .values({
        name: name.trim(),
        amount: amount.trim(),
        createdBy: createdBy.trim(),
        icon: icon.trim(),
      })
      .returning();

    // Respond with success
    return res.status(201).json({
      message: "Budget created successfully",
      budget: result[0], // Return the created budget
    });
  } catch (error) {
    console.error("Error while creating budget:", error);
    return res
      .status(500)
      .json({ error: "server_error", message: "Unable to create budget" });
  }
};

export default createBudget;
