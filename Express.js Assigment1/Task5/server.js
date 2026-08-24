import express from "express"
import "dotenv/config"
import connectDB from "./config/db.config.mjs"

const port = process.env.PORT || 3001
const app = express()

app.use(express.json())

connectDB()

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})