import app from './app.js'
import { PORT } from "./config.js";
import {dbConnection} from "./db.js"

dbConnection()
app.listen(PORT,()=>{
    console.log('server on port',PORT)
})
