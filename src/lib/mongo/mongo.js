import mongoose from "mongoose"
import {MONGO_URI} from "$env/static/private"

mongoose.connect(MONGO_URI)
export const database = mongoose.connection

database.once("open", () => console.log("[MongoDB]: Successfully connected"))
database.on("error", (error) => console.error(`[MongoDB] Error: ${error}`))
