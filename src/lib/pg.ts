import { Pool } from "pg";

// Use the connection string from environment variables
const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL, // Your connection string from .env
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false, // SSL configuration for production
});

export default pool;
