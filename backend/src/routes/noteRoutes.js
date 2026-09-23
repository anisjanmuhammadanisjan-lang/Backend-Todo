import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updatedNote } from "../controller/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote );


router.put("/:id", updatedNote);

router.delete("/:id", deleteNote);

export default router;