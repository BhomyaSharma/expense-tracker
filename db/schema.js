import { integer, numeric, pgTable, serial,varchar } from "drizzle-orm/pg-core";

export const Budgets=pgTable('budgets',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    icon:varchar('icon').notNull(),
    createdBy:varchar('createdBy').notNull(),
})


export const Expenses=pgTable('expenses',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:numeric('amount').notNull().default(0),
    budgetId:integer('budgetId').references(()=>Budgets.id, {onDelete: 'cascade'}),
    createdAt:varchar('createdAt').notNull()
})