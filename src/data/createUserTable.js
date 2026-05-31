import pool from "../configs/db.js";

const createUserTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS users (id serial primary key, name varchar(100) not null, email varchar(100) unique not null, created_at timestamp default now())`;
  try {
    pool.query(queryText);
    console.log("User table created successfully");
  } catch (err) {
    console.log("Error creating user table : ", err);
  }
};

export default createUserTable;
