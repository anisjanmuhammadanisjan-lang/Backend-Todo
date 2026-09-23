import express from "express";
import notesRoute from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config()
connectdb()

const app = express();
//middle ware
app.use(express.json())

app.use("/api/notes", notesRoute);




app.listen(5001, () => {
  console.log("Server started on port 5001!");
  
});


