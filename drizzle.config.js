export default {
  schema: "./utils/schema.jsx",  // Path to your schema
  driver: 'pg',                  // Correct driver for PostgreSQL
  dialect: 'postgresql',          // Correct dialect spelling
  dbCredentials: {                // Database credentials
    connectionString: 'postgresql://neons_owner:bUfG5DAL3nzE@ep-wispy-night-a5srafgy.us-east-2.aws.neon.tech/Expense-Traacker?sslmode=require',
  },
};
