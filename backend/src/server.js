import express from "express";
import notesRoute from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use("/api/notes", notesRoute);

connectdb()


app.listen(5001, () => {
  console.log("Server started on port 5001!");
  
});


