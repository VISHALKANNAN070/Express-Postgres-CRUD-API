import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./src/configs/db.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

//Middleware
app.use(express.json())
app.use(cors())

//Routes
 
//Error handling

//Server status 
app.get("/", async(req, res) => {
  const result = await pool.query("Select current_database()")
  res.send(`The database is : ${result.rows[0].current_database}`)
  res.send("Server running")
})
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})