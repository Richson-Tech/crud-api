import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
});

