import { Request, Response } from "express";
import { Budgets } from '/Users/apple/expense-tracker/db/schema.js';
import { db } from '/Users/apple/expense-tracker/db/drizzle.js';
import { eq } from 'drizzle-orm';


const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await db.select().from(Budgets);

    return res.status(200).json({ length: allUsers.length, data: allUsers });
  } catch (error) {
    console.log("Error while getting users", error);
    return res
      .status(500)
      .json({ error: "server_error", message: "Internal Server Error" });
  }
};

export default getUsers;
