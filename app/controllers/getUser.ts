import { Request, Response } from "express";
import { Budgets } from '/Users/apple/expense-tracker/db/schema.js';
import { db } from '/Users/apple/expense-tracker/db/drizzle.js';
import { eq } from 'drizzle-orm';

const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "missing_parameter", message: "userId is required" });
  }
  try {
    const userById = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.id, Number(userId)));

    if (userById.length < 1) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ data: userById[0] });
  } catch (error) {
    console.log("Error while fetching user", error);
    return res
      .status(500)
      .json({ error: "server_error", message: "Internal Server Error" });
  }
};

export default getUser;
