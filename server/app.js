import express from "express";
import morgan from "morgan";
import cors from "cors"
import notesRoute from "./routes/notes.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())
app.use(notesRoute)
export default app