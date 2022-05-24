import { Router } from "express";

const router = Router()
import {allNotes,oneNote,createNote,updateNote,deleteNote} from "../controllers/notes.controller.js"

router.get('/notes',allNotes)
router.post('/notes',createNote)
router.get('/notes/:id',oneNote)
router.put('/notes/:id',updateNote)
router.delete('/notes/:id',deleteNote)

export default router