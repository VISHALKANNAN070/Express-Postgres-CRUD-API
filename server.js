import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/configs/db.js";
import userRoutes from "./src/routes/userRoute.js";
import errorHandling from "./src/middlewares/errorHandler.js";
import createUserTable from "./src/data/createUserTable.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/", userRoutes);

//Error handling
app.use(errorHandling);
createUserTable();

//Server status
app.get("/", async (req, res) => {
  const result = await pool.query("Select current_database()");
  res.send(`The database is : ${result.rows[0].current_database}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
