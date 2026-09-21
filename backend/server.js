import express from "express";
import notesRoute from "./routes/noteRoutes.js";

const app = express();

app.use("/api/notes", notesRoute);

app.listen(5001, () => {
  console.log("Server started on port 5001!");
});