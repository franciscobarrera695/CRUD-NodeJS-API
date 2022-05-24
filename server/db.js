import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";
export const dbConnection = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
}
